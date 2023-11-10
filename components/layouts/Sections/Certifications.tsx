import React, { Fragment } from "react";

/** Redux related */
import CertificationCard from "@/components/common/Cards/CertificationCard";

/** Redux related */
import type { Cert } from "@/redux/certifications/reducer";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Certifications() {

  // Get certs from redux store
  const certs = useSelector<RootState, Cert[]>(state => state.cert.certs);
  return (
    <Fragment>
        <div className="pb-4 flex flex-col">
          <h3 className="pt-8 text-2xl md:text-3xl lg:text-3xl">🎫 Certifications ({certs.length})</h3>
          <p className="text-xs text-gray-400">As you noticed, I like collecting certifications so scroll, hehe. 😅</p>
        </div>
        <div className="pb-16 md:pb-0 lg:pb-0">
          <div className="pt-4 grid grid-cols-1 gap-2 w-full h-[50rem] overflow-y-scroll md:grid-cols-2 lg:grid-cols-3">
            { certs.map((cert, index) => (
              <CertificationCard key={index} cert={cert}/>
            ))}
          </div>
        </div>
    </Fragment>
  )
}
