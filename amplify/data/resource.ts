import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  
  Users: a
    .model({
      walletId: a.string().required(),
      username: a.string(),
      email: a.string(),
      totalUSDC: a.float(),
      votes: a.hasMany("Votes", "walletId"),
    })
    .identifier(["walletId"])
    .authorization((allow) => [
      allow.publicApiKey().to(["read", "create", "update", "delete"]),
    ]),

  
  Markets: a.model({
    title: a.string(),  
    description: a.string(), 
    rules: a.string(),
    expiryDate: a.date(),
    imgurl: a.string(),
    marketOptions: a.hasMany("MarketOptions", "marketId"),
    translations: a.ref('Translations').array(), 
  }).authorization((allow) => [
    allow.publicApiKey().to(["read", "create", "update", "delete"]),
  ]),

  
  MarketOptions: a.model({
    optionText: a.string(), 
    totalVotes: a.integer(),
    marketId: a.id().required(),
    market: a.belongsTo("Markets", "marketId"),
    translations: a.ref('Translations').array(), 
    votes: a.hasMany("Votes", "marketOptionId"),
  }).authorization((allow) => [
    allow.publicApiKey().to(["read", "create", "update", "delete"]),
  ]),

  
  Votes: a
    .model({
      voteId: a.id().required(),
      walletId: a.id().required(),
      marketOptionId: a.id().required(),
      user: a.belongsTo("Users", "walletId"), 
      marketOption: a.belongsTo("MarketOptions", "marketOptionId"), 
    })
    .identifier(["voteId"])
    .authorization((allow) => [
      allow.owner(),
    ]),

    
    Translations: a.customType({
      language: a.string(), 
      title: a.string(),    
      description: a.string(), 
      rules: a.string(),
    }),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
