import { createSlice } from "@reduxjs/toolkit";

/** Data */
import certificationsData from "@/assets/data/certifications.json";

export interface CertState {
  certs: Cert[];
}

export interface Cert {
  id: number;
  cert_type: string;
  cert_name: string;
  cert_url: string;
  cert_issuer: string;
  cert_cred_id: string;
  is_skill_track: boolean;
  is_career_track: boolean;
  is_course_track: boolean;
  is_degree_track: boolean;
}

const initialState: CertState = {
  certs: certificationsData.certifications.map((cert) => ({
    ...cert,
  })),
};

export const certSlice = createSlice({
  name: "cert",
  initialState,
  reducers: {},
});

export default certSlice.reducer;