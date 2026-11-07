'use client';
import Link from 'next/link';

import { useState, useEffect, useRef } from 'react';

const BOT_AVATAR = (
  <div style={{
    width: 36, height: 36, borderRadius: '50%',
    background: 'linear-gradient(135deg,#1a73e8,#0d47a1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, fontSize: 18,
  }}>🤖</div>
);

const INITIAL_FORM = {
  fullName: '', phone: '+880', email: '', companyName: '', message: '',
};

const QUICK_REPLIES = ['Contact Office', 'Help Centre'];

const FOLLOW_UP = "I noticed you haven't responded yet. Feel free to ask anything or fill the form below — we're happy to help! 😊";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [notifVisible, setNotifVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [view, setView] = useState('chat'); // 'chat' | 'form'
  const [followUpShown, setFollowUpShown] = useState(false);
  const messagesEndRef = useRef(null);
  const followUpTimer = useRef(null);
  const notifTimer = useRef(null);
  const openTimer = useRef(null);

  // On mount: show notification after 1.5s, then auto-open after 3.5s
  useEffect(() => {
    notifTimer.current = setTimeout(() => {
      setShowNotif(true);
      setTimeout(() => setNotifVisible(true), 50);
    }, 1500);

    openTimer.current = setTimeout(() => {
      setOpen(true);
      setShowNotif(false);
      setNotifVisible(false);
      setMessages([{
        id: 1, from: 'bot',
        text: "Hello! 👋 Welcome.\nWe're here to help. I'm your AI assistant. How can I assist you today?",
        hint: "You can also find answers in our Help Centre.",
        time: now(),
      }]);
    }, 4000);

    return () => {
      clearTimeout(notifTimer.current);
      clearTimeout(openTimer.current);
      clearTimeout(followUpTimer.current);
    };
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, view]);

  // Follow-up message if user hasn't interacted
  useEffect(() => {
    if (open && !followUpShown) {
      followUpTimer.current = setTimeout(() => {
        setFollowUpShown(true);
        setMessages(prev => [...prev, {
          id: Date.now(), from: 'bot', text: FOLLOW_UP, time: now(),
        }]);
      }, 12000);
    }
    return () => clearTimeout(followUpTimer.current);
  }, [open, followUpShown]);

  function now() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function handleOpen() {
    clearTimeout(openTimer.current);
    clearTimeout(notifTimer.current);
    setShowNotif(false);
    setNotifVisible(false);
    setOpen(o => {
      if (!o && messages.length === 0) {
        setMessages([{
          id: 1, from: 'bot',
          text: "Hello! 👋 Welcome.\nWe're here to help. I'm your AI assistant. How can I assist you today?",
          hint: "You can also find answers in our Help Centre.",
          time: now(),
        }]);
      }
      return !o;
    });
  }

  function handleQuickReply(label) {
    clearTimeout(followUpTimer.current);
    setFollowUpShown(true);
    const userMsg = { id: Date.now(), from: 'user', text: label, time: now() };
    const botReply = {
      id: Date.now() + 1, from: 'bot', time: now(),
      text: label === 'Contact Office'
        ? '📞 Call us: 09613-241234\n✉️ Email: info@automate.com.bd\n🌐 Website: automate.com.bd\n\nOr fill out the Contact Form tab — we typically respond within a few minutes!'
        : '📚 Our Help Centre has FAQs, guides, and tutorials. Click the link below to visit it now!',
      helpLink: label === 'Help Centre',
    };
    setMessages(prev => [...prev, userMsg, botReply]);
  }

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required.';
    if (!form.phone.trim() || form.phone === '+880') e.phone = 'Phone number is required.';
    return e;
  }

  function handleChange(ev) {
    const { name, value } = ev.target;
    setForm(f => ({ ...f, [name]: value }));
    setErrors(e => ({ ...e, [name]: undefined }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
    setMessages(prev => [...prev, {
      id: Date.now(), from: 'bot', time: now(),
      text: `✅ Thanks, ${form.fullName}! We've received your message and will contact you soon.`,
    }]);
    setView('chat');
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      <style>{`
        .cw-root *{box-sizing:border-box;font-family:'Inter',system-ui,sans-serif}
        .cw-root{position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;gap:12px}

        /* Notification bubble */
        .cw-notif{
          background:#fff;border-radius:20px;padding:10px 16px;
          box-shadow:0 8px 32px rgba(26,115,232,.18);
          font-size:14px;font-weight:600;color:#1a73e8;
          display:flex;align-items:center;gap:8px;
          transform:translateY(10px) scale(.95);opacity:0;
          transition:all .4s cubic-bezier(.34,1.56,.64,1);
          pointer-events:none;white-space:nowrap;
        }
        .cw-notif.visible{transform:translateY(0) scale(1);opacity:1}
        .cw-notif-dot{width:9px;height:9px;border-radius:50%;background:#1a73e8;animation:cw-ping 1.2s infinite}

        /* Launcher button */
        .cw-btn{
          width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;
          background:linear-gradient(135deg,#1a73e8,#0d47a1);
          color:#fff;display:flex;align-items:center;justify-content:center;
          box-shadow:0 6px 24px rgba(26,115,232,.45);
          position:relative;transition:transform .2s,box-shadow .2s;
          animation:cw-bounce 2.8s ease-in-out infinite;
        }
        .cw-btn:hover{transform:scale(1.1);box-shadow:0 10px 30px rgba(26,115,232,.55);animation:none}
        .cw-btn-ring{
          position:absolute;inset:-4px;border-radius:50%;
          border:2.5px solid rgba(26,115,232,.4);
          animation:cw-ring 2s ease-out infinite;
        }
        .cw-badge{
          position:absolute;top:-2px;right:-2px;
          width:18px;height:18px;border-radius:50%;
          background:#e53935;color:#fff;font-size:11px;font-weight:700;
          display:flex;align-items:center;justify-content:center;
          border:2px solid #fff;
        }

        /* Chat panel */
        .cw-panel{
          width:360px;max-width:calc(100vw - 32px);
          background:#fff;border-radius:20px;
          box-shadow:0 20px 60px rgba(0,0,0,.15);
          display:flex;flex-direction:column;overflow:hidden;
          transform-origin:bottom right;
          animation:cw-panel-in .35s cubic-bezier(.34,1.56,.64,1);
          max-height:calc(100vh - 120px);
        }

        /* Header */
        .cw-header{
          background:linear-gradient(135deg,#1a73e8,#0d47a1);
          padding:18px 20px;display:flex;align-items:center;gap:14px;
          position:relative;
        }
        .cw-header-avatar{
          width:46px;height:46px;border-radius:50%;
          background:rgba(255,255,255,.2);
          display:flex;align-items:center;justify-content:center;font-size:22px;
          border:2px solid rgba(255,255,255,.35);flex-shrink:0;
        }
        .cw-header-info{flex:1}
        .cw-header-name{color:#fff;font-size:16px;font-weight:700;margin:0 0 2px}
        .cw-header-status{color:rgba(255,255,255,.8);font-size:12px;display:flex;align-items:center;gap:5px}
        .cw-online-dot{width:7px;height:7px;border-radius:50%;background:#4caf50}
        .cw-close{
          background:rgba(255,255,255,.15);border:none;color:#fff;
          width:30px;height:30px;border-radius:50%;cursor:pointer;
          font-size:18px;display:flex;align-items:center;justify-content:center;
          transition:background .2s;
        }
        .cw-close:hover{background:rgba(255,255,255,.3)}

        /* Tab bar */
        .cw-tabs{display:flex;border-bottom:1px solid #f0f4ff;background:#fafcff}
        .cw-tab{
          flex:1;padding:10px;border:none;background:transparent;
          font-size:13px;font-weight:600;color:#888;cursor:pointer;
          border-bottom:2.5px solid transparent;transition:all .2s;
        }
        .cw-tab.active{color:#1a73e8;border-bottom-color:#1a73e8;background:#fff}

        /* Messages */
        .cw-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;min-height:0}
        .cw-messages::-webkit-scrollbar{width:4px}
        .cw-messages::-webkit-scrollbar-thumb{background:#dde4f0;border-radius:4px}

        .cw-msg{display:flex;gap:8px;align-items:flex-end}
        .cw-msg.user{flex-direction:row-reverse}
        .cw-bubble{
          max-width:75%;padding:10px 14px;border-radius:18px;
          font-size:13.5px;line-height:1.55;white-space:pre-line;word-break:break-word;
        }
        .cw-msg.bot .cw-bubble{background:#f0f4ff;color:#1a237e;border-bottom-left-radius:4px}
        .cw-msg.user .cw-bubble{background:linear-gradient(135deg,#1a73e8,#1565c0);color:#fff;border-bottom-right-radius:4px}
        .cw-hint{font-size:12px;color:#1a73e8;margin-top:5px;font-style:italic;text-decoration:underline;cursor:pointer}
        .cw-time{font-size:10px;color:#bbb;margin-top:4px;text-align:right}
        .cw-msg.bot .cw-time{text-align:left}

        /* Quick replies */
        .cw-quick{display:flex;flex-wrap:wrap;gap:8px;padding:8px 16px 12px}
        .cw-qbtn{
          background:#f0f4ff;border:1.5px solid #c5d8fb;color:#1a73e8;
          border-radius:20px;padding:6px 14px;font-size:12.5px;font-weight:600;
          cursor:pointer;transition:all .2s;white-space:nowrap;
        }
        .cw-qbtn:hover{background:#1a73e8;color:#fff;border-color:#1a73e8;transform:translateY(-1px)}

        /* Form */
        .cw-form{padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;flex:1;min-height:0}
        .cw-form::-webkit-scrollbar{width:4px}
        .cw-form::-webkit-scrollbar-thumb{background:#dde4f0;border-radius:4px}
        .cw-field{display:flex;flex-direction:column;gap:4px}
        .cw-label{font-size:12px;font-weight:600;color:#444}
        .cw-req{color:#e53935;margin-left:2px}
        .cw-input,.cw-textarea{
          border:1.5px solid #dde4f0;border-radius:10px;padding:10px 12px;
          font-size:13.5px;color:#222;outline:none;transition:border .2s,box-shadow .2s;
          background:#fafcff;resize:none;
        }
        .cw-input:focus,.cw-textarea:focus{border-color:#1a73e8;box-shadow:0 0 0 3px rgba(26,115,232,.12)}
        .cw-input.error,.cw-textarea.error{border-color:#e53935}
        .cw-err{font-size:11.5px;color:#e53935}
        .cw-phone-row{display:flex;gap:8px}
        .cw-phone-code{
          width:80px;border:1.5px solid #dde4f0;border-radius:10px;
          padding:10px 8px;font-size:13px;background:#fafcff;
          color:#1a73e8;font-weight:600;outline:none;flex-shrink:0;
        }

        /* Buttons */
        .cw-send{
          background:linear-gradient(135deg,#1a73e8,#0d47a1);color:#fff;
          border:none;border-radius:12px;padding:12px;font-size:14px;font-weight:700;
          cursor:pointer;transition:all .2s;letter-spacing:.3px;
        }
        .cw-send:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(26,115,232,.4)}
        .cw-send-email{
          background:#fff;color:#1a73e8;border:1.5px solid #1a73e8;
          border-radius:12px;padding:10px;font-size:13px;font-weight:600;
          cursor:pointer;transition:all .2s;
        }
        .cw-send-email:hover{background:#f0f4ff}
        .cw-success{
          background:#e8f5e9;color:#2e7d32;border-radius:10px;
          padding:10px 14px;font-size:13px;font-weight:600;text-align:center;
        }

        /* Footer hint */
        .cw-footer{
          text-align:center;padding:10px;font-size:11.5px;color:#aaa;
          border-top:1px solid #f0f4ff;background:#fafcff;
        }
        .cw-footer a{color:#1a73e8;text-decoration:none;font-weight:600}

        /* Keyframes */
        @keyframes cw-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes cw-ring{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.6);opacity:0}}
        @keyframes cw-ping{0%,100%{opacity:1}50%{opacity:.3}}
        @keyframes cw-panel-in{from{transform:scale(.85) translateY(20px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}

        /* Mobile */
        @media(max-width:480px){
          .cw-root{bottom:16px;right:16px}
          .cw-panel{width:calc(100vw - 32px);max-height:calc(100vh - 110px)}
        }
      `}</style>

      <div className="cw-root">
        {/* Notification badge */}
        {showNotif && (
          <div className={`cw-notif${notifVisible ? ' visible' : ''}`}>
            <span className="cw-notif-dot" />
            💬 New message
          </div>
        )}

        {/* Chat panel */}
        {open && (
          <div className="cw-panel" role="dialog" aria-label="AI Chat Assistant">
            {/* Header */}
            <div className="cw-header">
              <div className="cw-header-avatar">🤖</div>
              <div className="cw-header-info">
                <p className="cw-header-name">AI Assistant</p>
                <span className="cw-header-status">
                  <span className="cw-online-dot" /> Online — Typically replies instantly
                </span>
              </div>
              <button className="cw-close" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
            </div>

            {/* Tabs */}
            <div className="cw-tabs">
              <button className={`cw-tab${view === 'chat' ? ' active' : ''}`} onClick={() => setView('chat')}>
                💬 Chat
              </button>
              <button className={`cw-tab${view === 'form' ? ' active' : ''}`} onClick={() => setView('form')}>
                📋 Contact Form
              </button>
            </div>

            {/* Chat view */}
            {view === 'chat' && (
              <>
                <div className="cw-messages">
                  {messages.map(msg => (
                    <div key={msg.id} className={`cw-msg ${msg.from}`}>
                      {msg.from === 'bot' && BOT_AVATAR}
                      <div>
                        <div className="cw-bubble">{msg.text}</div>
                        {msg.hint && <div className="cw-hint">📖 {msg.hint}</div>}
                  {msg.helpLink && (
                    <Link href="/resources" className="cw-hint" style={{display:'inline-block',marginTop:6}}>🔗 Go to Help Centre →</Link>
                  )}
                        <div className="cw-time">{msg.time}</div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick replies */}
                <div className="cw-quick">
                  {QUICK_REPLIES.map(q => (
                    <button key={q} className="cw-qbtn" onClick={() => handleQuickReply(q)}>{q}</button>
                  ))}
                </div>
              </>
            )}

            {/* Contact form view */}
            {view === 'form' && (
              <form className="cw-form" onSubmit={handleSubmit} noValidate>
                <div className="cw-field">
                  <label className="cw-label">Full Name <span className="cw-req">*</span></label>
                  <input
                    className={`cw-input${errors.fullName ? ' error' : ''}`}
                    name="fullName" value={form.fullName}
                    onChange={handleChange} placeholder="e.g. Rahim Uddin"
                  />
                  {errors.fullName && <span className="cw-err">{errors.fullName}</span>}
                </div>

                <div className="cw-field">
                  <label className="cw-label">Phone <span className="cw-req">*</span></label>
                  <div className="cw-phone-row">
                    <input className="cw-phone-code cw-input" value="+880" readOnly style={{width:72}} />
                    <input
                      className={`cw-input${errors.phone ? ' error' : ''}`}
                      name="phone" value={form.phone}
                      onChange={handleChange} placeholder="01XXXXXXXXX"
                      style={{flex:1}}
                    />
                  </div>
                  {errors.phone && <span className="cw-err">{errors.phone}</span>}
                </div>

                <div className="cw-field">
                  <label className="cw-label">Email <span style={{color:'#aaa',fontSize:11}}>(optional)</span></label>
                  <input
                    className="cw-input" type="email"
                    name="email" value={form.email}
                    onChange={handleChange} placeholder="you@example.com"
                  />
                </div>

                <div className="cw-field">
                  <label className="cw-label">Company Name <span style={{color:'#aaa',fontSize:11}}>(optional)</span></label>
                  <input
                    className="cw-input"
                    name="companyName" value={form.companyName}
                    onChange={handleChange} placeholder="Your company"
                  />
                </div>

                <div className="cw-field">
                  <label className="cw-label">Message / Address</label>
                  <textarea
                    className="cw-textarea"
                    name="message" value={form.message}
                    onChange={handleChange} placeholder="Type your message or address..."
                    rows={3}
                  />
                </div>

                {submitted && <div className="cw-success">✅ Message sent! We'll contact you soon.</div>}

                <button type="submit" className="cw-send" id="cw-send-btn">📤 Send Message</button>
                <button type="button" className="cw-send-email" onClick={handleSubmit} id="cw-send-email-btn">
                  ✉️ Send via Email
                </button>
              </form>
            )}

            <div className="cw-footer">
              Powered by <span style={{fontWeight:600,color:'#1a73e8'}}>AI Assistant</span> &nbsp;·&nbsp; <Link href="/resources" style={{color:'#1a73e8',fontWeight:600,textDecoration:'none'}}>Help Centre</Link>
            </div>
          </div>
        )}

        {/* Floating launcher button */}
        <button
          className="cw-btn"
          onClick={handleOpen}
          aria-label={open ? 'Close chat' : 'Open chat'}
          aria-expanded={open}
          id="cw-launcher-btn"
        >
          <span className="cw-btn-ring" />
          {!open && <span className="cw-badge">1</span>}
          {open
            ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            : <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          }
        </button>
      </div>
    </>
  );
}
