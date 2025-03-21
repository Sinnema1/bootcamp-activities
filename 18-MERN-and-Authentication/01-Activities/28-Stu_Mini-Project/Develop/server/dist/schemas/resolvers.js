import Tech from '../models/Tech.js';
import Matchup from '../models/Matchup.js';
const resolvers = {
    Query: {
        getAllTech: async () => {
            return await Tech.find();
        },
        getAllMatchups: async () => {
            return await Matchup.find();
        },
        getMatchup: async (_parent, { matchupId }) => {
            return await Matchup.findOne({ _id: matchupId });
        }
    },
    Mutation: {
        createMatchup: async (_parent, { tech1, tech2 }) => {
            const matchup = await Matchup.create({ tech1, tech2 });
            return matchup;
        },
        createVote: async (_parent, { matchupId, techNum }) => {
            await Matchup.findOneAndUpdate({ _id: matchupId }, { $inc: { [`tech${techNum}_votes`]: 1 } }, { new: true });
            return true;
        },
    },
};
export default resolvers;
