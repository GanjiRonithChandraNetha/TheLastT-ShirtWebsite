import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const user_id = searchParams.get('user_id');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Validate password according to the requested Zod constraints
  const validatePassword = (pass) => {
    if (pass.length < 7) return 'Password should at least have 7 characters';
    if (pass.length > 20) return 'Cannot cross 20 characters';
    if (!/^[A-Za-z\d@#]+$/.test(pass)) return 'Only letters, numbers, @ and # allowed';
    if (!/[a-z]/.test(pass)) return 'At least one lowercase character required';
    if (!/[A-Z]/.test(pass)) return 'At least one uppercase character required';
    if (!/[\d]/.test(pass)) return 'At least one numeric character required';
    if (!/[@#]/.test(pass)) return 'At least one @ or # required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // If missing URL params
    if (!token || !user_id) {
      setError('Invalid link. Missing token or user_id in URL.');
      return;
    }

    // Verify passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Validate structure
    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      // Send a POST request mapping the fields expected by the controller
      const url = `http://localhost:3000/auth/reset-password?token=${encodeURIComponent(token)}&user_id=${encodeURIComponent(user_id)}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      let data = {};
      try {
         data = await response.json();
      } catch (err) {
         // Failsafe if backend doesn't return JSON
      }

      if (response.ok && data.success) {
        setSuccess(data.message || 'Password updated successfully');
        setPassword('');
        setConfirmPassword('');
      } else {
        // Render detailed field errors if Zod validation failed in the backend
        if (data.message === "INVALID_PASSWORD_FORMAT" && data.errors) {
            setError('Backend Validation Error: ' + JSON.stringify(data.errors));
        } else {
            setError(data.message || 'Failed to update password. Please try again.');
        }
      }
    } catch (err) {
      setError('Network error. Could not connect to the backend server.');
    } finally {
      setLoading(false);
    }
  };

  const toggleButtonStyle = {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontWeight: 800,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: 'var(--black)',
    padding: '4px 8px',
    backgroundColor: 'var(--primary)',
    border: '2px solid var(--black)',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '2px 2px 0px var(--black)',
    transition: 'transform 0.1s ease, box-shadow 0.1s ease',
  };

  return (
    <div className="card-shell" style={{ maxWidth: '480px', margin: '0 auto' }}>
      <div className="card">
        <div className="card-accent" style={{ background: 'linear-gradient(90deg, var(--accent1), var(--accent2))' }}></div>
        <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Reset password</h2>
        <p style={{ fontSize: '14px', marginBottom: '24px' }}>Please enter your new password below to secure your account.</p>
        
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="msg-block" style={{ backgroundColor: '#FEF2F2', borderColor: '#FCA5A5', marginBottom: '24px', padding: '12px' }}>
              <div className="msg-label" style={{ color: '#991B1B' }}>Error</div>
              <div className="msg-text" style={{ color: '#991B1B', fontSize: '13px' }}>{error}</div>
            </div>
          )}
          
          {success && (
            <div className="msg-block" style={{ backgroundColor: '#F0FDF4', borderColor: '#86EFAC', marginBottom: '24px', padding: '12px' }}>
              <div className="msg-label" style={{ color: '#166534' }}>Success</div>
              <div className="msg-text" style={{ color: '#166534', fontSize: '13px' }}>{success}</div>
            </div>
          )}

          <div className="input-group">
            <label className="input-label">New Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? "text" : "password"} 
                className="input-field" 
                placeholder="Enter new password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: '80px' }}
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                style={toggleButtonStyle}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(-50%) translate(2px, 2px)'; e.currentTarget.style.boxShadow = '0px 0px 0px var(--black)'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-50%)'; e.currentTarget.style.boxShadow = '2px 2px 0px var(--black)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%)'; e.currentTarget.style.boxShadow = '2px 2px 0px var(--black)'; }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                className="input-field" 
                placeholder="Confirm new password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ paddingRight: '80px' }}
                required
              />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={toggleButtonStyle}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(-50%) translate(2px, 2px)'; e.currentTarget.style.boxShadow = '0px 0px 0px var(--black)'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-50%)'; e.currentTarget.style.boxShadow = '2px 2px 0px var(--black)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%)'; e.currentTarget.style.boxShadow = '2px 2px 0px var(--black)'; }}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
          <button type="submit" className="btn-primary btn-block" style={{ marginTop: '24px', padding: '12px' }} disabled={loading}>
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
