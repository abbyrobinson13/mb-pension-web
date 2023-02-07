import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  img: {
    type: String
  },
  url: {
    type: String
  },
  tags: {
    type: Array
  },
  category: {
    type: String
  },
  provider: {
    type: String
  }
});

export const Content = mongoose.model('Content', contentSchema);

//READ
export const getAllContent = async () => {
  const allContent = await Content.find();
  return allContent;
};

//CREATE
export const createContent = async (content) => {
  const newContent = await Content.create(content);
  return newContent;
};
