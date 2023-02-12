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
  practitionerAnnualMax: {
    type: Object,
    required: true,
  },
  practitionerAnnualMaxAmount: {
    type: Object,
    required: true,
  },
  perVisitMax: {
    type: Object,
    required: true,
  },
  perVisitMaxAmount: {
    type: Object,
    required: true,
  },
  perVisitMaxToAllServices: {
    type: Object,
    required: true,
  },
  perVisitMaxServices: {
    type: Object,
    required: true,
  },
  paramedDependent: {
    type: Object,
    required: true,
  },
  familyOrEmployeeOnly: {
    type: Object,
    required: true,
  },
  insuranceCompany: {
    type: Object,
    required: true,
  },
  drugsAnnualMax: {
    type: Object,
    required: true,
  },
  coinsuranceDrugs: {
    type: Object,
    required: true,
  },
  drugsAnnualMaxAmount: {
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
