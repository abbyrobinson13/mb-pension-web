//For Companies Benefits Form
import mongoose from 'mongoose';
const benefitsSchema = new mongoose.Schema ({
  companyName: {
    type: String,
    required: true,
  },
  paramedical: {
    type: Object,
    required: true,
  },
  coinsuranceParamedical: {
    type: Object,
    required: true,
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
