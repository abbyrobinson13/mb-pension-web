//For Companies Benefits Form
import mongoose from 'mongoose';
const benefitsSchema = new mongoose.Schema ({
  companyName: {
    type: String,
    required: false,
  },
  selectedParamedical: {
    type: Object,
    required: true,
  },
  selectedCoinsuranceLevel: {
    type: Object,
    required: false,
  },
});

export const Benefits = mongoose.model ('Benefits', benefitsSchema);

export const getAllBenefits = async () => {
  const allBenefits = await Benefits.find ();
  return allBenefits;
};

export const createBenefits = async benefits => {
  const newBenefits = await Benefits.create (benefits);
  return newBenefits;
};
