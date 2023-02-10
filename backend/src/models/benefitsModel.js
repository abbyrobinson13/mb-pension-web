//For Companies Benefits Form
import mongoose from 'mongoose';

const benefitsSchema = new mongoose.Schema ({
  paramedicalOptions: {
    type: String,
    required: true,
  },
  coinsuranceOptions: {
    type: String,
    required: true,
  },
  coinsuranceOptionsPercent: {
    type: Number,
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
