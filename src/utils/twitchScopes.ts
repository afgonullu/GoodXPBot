enum CollectionTypes {
  ESSENTIAL,
  EXTENDED_BOT,
  ULTIMATE,
}

enum ScopeTypes {
  USER,
  CHANNEL,
  CHAT,
}

const twitchScopes = [
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.USER,
    scope: 'analytics:read:extensions',
    desc: 'View analytics data for the Twitch Extensions owned by the authenticated account.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.USER,
    scope: 'analytics:read:games',
    desc: 'View analytics data for the games owned by the authenticated account.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'bits:read',
    desc: 'View Bits information for a channel.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:edit:commercial',
    desc: 'Run commercials on a channel.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:manage:broadcast',
    desc: 'Manage a channel’s broadcast configuration, including updating channel configuration and managing stream markers and stream tags.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:manage:extensions',
    desc: 'Manage a channel’s Extension configuration, including activating Extensions.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:manage:polls',
    desc: 'Manage a channel’s polls.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:manage:predictions',
    desc: 'Manage of channel’s Channel Points Predictions',
  },

  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:manage:redemptions',
    desc: 'Manage Channel Points custom rewards and their redemptions on a channel.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:manage:schedule',
    desc: 'Manage a channel’s stream schedule.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:manage:videos',
    desc: 'Manage a channel’s videos, including deleting videos.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:read:editors',
    desc: 'View a list of users with the editor role for a channel.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:read:hype_train',
    desc: 'View Hype Train information for a channel.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:read:polls',
    desc: 'View a channel’s polls.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:read:predictions',
    desc: 'View a channel’s Channel Points Predictions.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:read:redemptions',
    desc: 'View Channel Points custom rewards and their redemptions on a channel.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:read:stream_key',
    desc: 'View an authorized user’s stream key.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHANNEL,
    scope: 'channel:read:subscriptions',
    desc: 'View a list of all subscribers to a channel and check if a user is subscribed to a channel.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.CHANNEL,
    scope: 'clips:edit',
    desc: 'Manage Clips for a channel.',
  },
  {
    collection: CollectionTypes.ESSENTIAL,
    type: ScopeTypes.CHAT,
    scope: 'moderation:read',
    desc: 'View a channel’s moderation data including Moderators, Bans, Timeouts, and Automod settings.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHAT,
    scope: 'moderator:manage:automod',
    desc: 'Manage messages held for review by AutoMod in channels where you are a moderator.',
  },
  { collection: CollectionTypes.ULTIMATE, type: ScopeTypes.USER, scope: 'user:edit', desc: 'Manage a user object.' },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHAT,
    scope: 'user:manage:blocked_users',
    desc: 'Manage the block list of a user.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHAT,
    scope: 'user:read:blocked_users',
    desc: 'View the block list of a user.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.USER,
    scope: 'user:read:broadcast',
    desc: 'View a user’s broadcasting configuration, including Extension configurations.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.USER,
    scope: 'user:read:email',
    desc: 'View a user’s email address.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.USER,
    scope: 'user:read:follows',
    desc: 'View the list of channels a user follows.',
  },
  {
    collection: CollectionTypes.ULTIMATE,
    type: ScopeTypes.USER,
    scope: 'user:read:subscriptions',
    desc: 'View if an authorized user is subscribed to specific channels.',
  },
  {
    collection: CollectionTypes.ESSENTIAL,
    type: ScopeTypes.CHAT,
    scope: 'channel:moderate',
    desc: 'Perform moderation actions in a channel. The user requesting the scope must be a moderator in the channel.',
  },
  {
    collection: CollectionTypes.ESSENTIAL,
    type: ScopeTypes.CHAT,
    scope: 'chat:edit',
    desc: 'Send live stream chat and rooms messages.',
  },
  {
    collection: CollectionTypes.ESSENTIAL,
    type: ScopeTypes.CHAT,
    scope: 'chat:read',
    desc: 'View live stream chat and rooms messages.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHAT,
    scope: 'whispers:read',
    desc: 'View your whisper messages.',
  },
  {
    collection: CollectionTypes.EXTENDED_BOT,
    type: ScopeTypes.CHAT,
    scope: 'whispers:edit',
    desc: 'Send whisper messages.',
  },
];

const essentialScopes = twitchScopes
  .filter((scope) => scope.collection === CollectionTypes.ESSENTIAL)
  .map((scope) => scope.scope)
  .join(' ');

const extendedScopes = twitchScopes
  .filter((scope) => scope.collection === CollectionTypes.EXTENDED_BOT)
  .map((scope) => scope.scope)
  .join(' ');

export default { essentialScopes, extendedScopes };
