// Returns the filter that must be added to EVERY query that reads client data.
function scopeFor(user) {
  if (user.role === 'admin') return {};
  if (!user.clientId) return { _id: { $in: [] } }; // a client without a clientId sees nothing
  return { clientId: user.clientId };
}

module.exports = { scopeFor };