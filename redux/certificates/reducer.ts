import { createSlice } from "@reduxjs/toolkit";

/** Data */
import certificatesData from "@/assets/data/certificates.json";

export interface CertificateState {
  certs: Certificates[];
}

export interface Certificates {
  id: number;
  title: string;
  issuerName: string;
  issuerLogoImageURL: string;
  issueDate: string;
  expirationDate: string;
  credentialID: string;
  credentialURL: string;
  skills: string[];
}

const initialState: CertificateState = {
  certs: certificatesData.certificates.map((cert) => ({
    ...cert,
  })),
};

export const certSlice = createSlice({
  name: "cert",
  initialState,
  reducers: {},
});

export default certSlice.reducer;