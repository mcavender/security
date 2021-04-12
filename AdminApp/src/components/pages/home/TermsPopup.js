import React, { useState } from 'react'
import Modal from './Modal'


export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div onClick={() => console.log('clicked')}>
        <button className="submit" onClick={() => setIsOpen(true)}>Terms & Conditions</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="terms-conditions">
            <h2 className="terms-conditions-header">Consent to Monitor</h2><br/>
                <p>You are accessing a U.S. Government (USG) Information System (IS) that is provided for USG-authorized use only. This USG system is intended
                to be used by authorized VA network users for viewing and retrieving information only, except as otherwise explicitly authorized.</p>
                <p>By using this IS (which includes any device attached to this IS), you consent to the following conditions:</p>
            <ul>
                <li>
                    The USG routinely intercepts and monitors communications on this IS for purposes including, but not limited to, penetration testing, 
                    COMSEC monitoring, network operations and defense, personnel misconduct (PM), law enforcement (LE), and counterintelligence (CI) investigations.
                </li>
                <li>
                    At any time, the USG may inspect and seize data stored on this IS.
                </li>
                <li>
                    Communications using, or data stored on, this IS are not private, are subject to routine monitoring, interception, and search, and may be disclosed 
                    or used for any USG authorized purpose.
                </li>
                <li>
                    This IS includes security measures (e.g., authentication and access controls) to protect USG interests--not for your personal benefit or privacy.
                </li>
                <li>
                    Notwithstanding the above, using this IS does not constitute consent to PM, LE or CI investigative searching or monitoring of the content of privileged 
                    communications, or work product, related to personal representation or services by attorneys, psychotherapists, or clergy, and their assistants. Such
                    communications and work product are private and confidential. See User Agreement for details.
                </li>
            </ul>
            <p>
                Unauthorized attempts or acts to either (1) access, upload, change or delete information on this system, (2) modify this system, (3) deny access to this 
                system, or (4) accrue resources for unauthorized use on this system are strictly prohibited. Such attempts or acts are subject to action that may result
                in criminal, civil, or administrative penalties.
            </p>    
        </div>
        </Modal>
      </div>
    </>
  )
}