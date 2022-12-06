import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function CertificacionDisponible({icon}) {
    return (
      <p className="flex justify-center mb-[1rem] phone:text-[12px] gap-[.4rem]">
        <span className="text-blue-500">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span>Certificación disponible</span>
      </p>
    );
  }
