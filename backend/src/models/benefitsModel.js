//For Companies Benefits Form
import mongoose from 'mongoose';
const benefitsSchema = new mongoose.Schema({
  selectedParamedical: {
    type: String,
    required: false
  },
  selectedCoinsuranceLevelOptions: {
    type: Number,
    required: false
  }
});

export const Benefits = mongoose.model('Benefits', benefitsSchema);

export const getAllBenefits = async () => {
  const allBenefits = await Benefits.find();
  return allBenefits;
};

export const createBenefits = async (benefits) => {
  const newBenefits = await Benefits.create(benefits);
  return newBenefits;
};
