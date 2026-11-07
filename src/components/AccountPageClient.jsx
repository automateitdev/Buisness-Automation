'use client';

import { useState } from 'react';
import PageHero from './PageHero';
import { useLocalized } from '../i18n/LanguageProvider';
import { ACCOUNT_BN } from '../i18n/bn/account';

const ACCOUNT_EN = {
  title: 'Your Account',
  subtitle: 'Manage your Automate IT Limited account settings. Use the options below to update your preferences or permanently delete your account.',
  menuTitle: 'Account Menu',
  menu: ['Delete Account', 'Change Password', 'Profile Settings', 'Notifications'],
  deletedTitle: 'Account Deleted',
  deletedText: 'Your account has been permanently deleted. All associated data has been removed from our systems.',
  deleteTitle: 'Delete Account',
  deleteDescBefore: 'Deleting your account is ',
  deleteDescStrong: 'permanent',
  deleteDescAfter: ". All your data will be wiped out immediately and you won't be able to get it back.",
  warning: 'This action cannot be undone. Please be absolutely sure before proceeding.',
  username: 'Username',
  usernamePh: 'Enter your username',
  password: 'Password',
  passwordPh: 'Enter your password to confirm',
  reason: 'Reason for deletion',
  optional: '(optional)',
  reasonPh: 'Tell us why you are leaving (optional)...',
  deleteBtn: 'Delete My Account',
  confirmTitle: 'Are you absolutely sure?',
  confirmBefore: 'This will permanently delete your account and all associated data. This action ',
  confirmStrong: 'cannot be undone',
  confirmAfter: '.',
  cancel: 'Cancel',
  confirmBtn: 'Yes, Delete My Account',
};

export default function AccountPageClient() {
  const t = useLocalized(ACCOUNT_EN, ACCOUNT_BN);
  const [form, setForm] = useState({ username: '', password: '', reason: '' });
  const [confirm, setConfirm] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setConfirm(true);
  }

  function handleConfirm() {
    setDeleted(true);
    setConfirm(false);
  }

  return (
    <>
      <PageHero
        title={t.title}
        subtitle={t.subtitle}
        theme="rose"
      />

      <section className="acc-section">
        <div className="container acc-layout">

          <div className="acc-sidebar">
            <h3 className="acc-sidebar-title">{t.menuTitle}</h3>
            <ul className="acc-sidebar-menu">
              <li className="acc-menu-item active">
                <span className="acc-menu-icon">🗑️</span>{t.menu[0]}
              </li>
              <li className="acc-menu-item">
                <span className="acc-menu-icon">🔑</span>{t.menu[1]}
              </li>
              <li className="acc-menu-item">
                <span className="acc-menu-icon">👤</span>{t.menu[2]}
              </li>
              <li className="acc-menu-item">
                <span className="acc-menu-icon">🔔</span>{t.menu[3]}
              </li>
            </ul>
          </div>

          <div className="acc-content">
            {deleted ? (
              <div className="acc-deleted-msg">
                <div className="acc-deleted-icon">✓</div>
                <h2>{t.deletedTitle}</h2>
                <p>{t.deletedText}</p>
              </div>
            ) : (
              <div className="acc-delete-card">
                <div className="acc-delete-header">
                  <div className="acc-delete-icon-wrap">
                    <span className="acc-delete-icon">⚠️</span>
                  </div>
                  <div>
                    <h2 className="acc-delete-title">{t.deleteTitle}</h2>
                    <p className="acc-delete-desc">
                      {t.deleteDescBefore}<strong>{t.deleteDescStrong}</strong>{t.deleteDescAfter}
                    </p>
                  </div>
                </div>

                <div className="acc-warning-strip">
                  <span className="acc-warn-icon">⚠</span>
                  {t.warning}
                </div>

                <form className="acc-form" onSubmit={handleSubmit}>
                  <div className="acc-form-group">
                    <label className="acc-label" htmlFor="username">{t.username}</label>
                    <input
                      id="username" name="username" type="text"
                      className="acc-input" placeholder={t.usernamePh}
                      value={form.username} onChange={handleChange} required
                    />
                  </div>
                  <div className="acc-form-group">
                    <label className="acc-label" htmlFor="password">{t.password}</label>
                    <input
                      id="password" name="password" type="password"
                      className="acc-input" placeholder={t.passwordPh}
                      value={form.password} onChange={handleChange} required
                    />
                  </div>
                  <div className="acc-form-group">
                    <label className="acc-label" htmlFor="reason">
                      {t.reason} <span className="acc-optional">{t.optional}</span>
                    </label>
                    <textarea
                      id="reason" name="reason" rows={4}
                      className="acc-input acc-textarea"
                      placeholder={t.reasonPh}
                      value={form.reason} onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="acc-delete-btn">
                    🗑️ {t.deleteBtn}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {confirm && (
        <div className="acc-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <div className="acc-modal">
            <div className="acc-modal-icon">⚠️</div>
            <h2 id="confirm-title" className="acc-modal-title">{t.confirmTitle}</h2>
            <p className="acc-modal-text">
              {t.confirmBefore}<strong>{t.confirmStrong}</strong>{t.confirmAfter}
            </p>
            <div className="acc-modal-actions">
              <button className="acc-modal-cancel" onClick={() => setConfirm(false)}>
                {t.cancel}
              </button>
              <button className="acc-modal-confirm" onClick={handleConfirm}>
                {t.confirmBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
