function showDocuments(){

    let certificate = document.getElementById("Certificate").value;
    let documents = document.getElementById("documents");

    if(certificate=="income"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar and Smart Card should have same address)</P>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>If Government Employee then PAN Card and Pay Slip is required</li>
            <li>(Pay slip should be within 3 months)</li>
        </ul>`;
    }

    else if(certificate=="community"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar and Smart Card should have same address)</P>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Applicant or Applicant Father's old Community Certificate / Applicant or Applicant Father's TC (Community should be mentioned) / VAO Certificate</li>
        </ul>`;
    }

    else if(certificate=="nativity"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar and Smart Card should have same address)</P>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
        </ul>`;
    }
    else if(certificate=="OBC"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar card and Smart Card should have same address)</p>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Income Certificate</li>
            <li>Community Certificate</li>
            <li>Nativity Certificate</li>
            <p>(Please ensure that your Income, Community, and Nativity Certificates are valid)</p>
        </ul>`;
    }
    else if(certificate=="FirstGraduate"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar card and Smart Card should have same address)</p>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Applicant's TC</li>
            <li>Siblings Bonafied</li>
            <li>Applicant's Father and Mother TC</li>
            <li>If the grandparents are illiterate, a Notary Public affidavit is required, else TC is must</li>
        </ul>`;
    }
    else if(certificate=="Widow"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar card and Smart Card should have same address)</p>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Husband's Death Certificate</li>
            <li>Marriage Invitation or Husband and Joint photograph of Husband and Wife</li>
        </ul>`;
    }
    else if(certificate=="WidowPension"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar card and Smart Card should have same address)</p>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Widow Certificate</li>
            <li>Husband's Death Certificate</li>
            <li>Bank Passbook</li>
            <li>Voter ID</li>
        </ul>`;
    }
        else if(certificate=="OAP"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar card and Smart Card should have same address)</p>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Bank Passbook</li>
            <li>Voter ID</li>
        </ul>`;
        }
        else if(certificate=="Scholarship"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar card and Smart Card should have same address)</p>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Disability Certificate</li>
            <li>Disability Book</li>
            <li>UDID Card</li>
            <li>School Bonafied Certificate</li>
            <li>Previous Year Marksheet</li>
            <li>Bank Passbook</li>
        </ul>`;
        }
         else if(certificate=="Disability"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>(*Aadhar card and Smart Card should have same address)</p>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Disability Certificate</li>
            <li>Disability Book</li>
            <li>UDID Card</li>
            <li>Voter ID</li>
            <li>Bank Passbook</li>
        </ul>`;
        }
        else if(certificate=="PAN"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>*Aadhar details must be correct</p>
        <ul type="none">
            <li>2 Passport size Photos</li>
            <li>Aadhaar Card</li>
            <li>10th Marksheet or Birth Certificate</li>
        </ul>`;
        }
        else if(certificate=="Crop"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <ul type="none">
            <li>Aadhaar Card</li>
            <li>Smart Card (Ration Card)</li>
            <li>Patta Copy</li>
            <li>Adangal</li>
            <li>Bank Passbook</li>
        </ul>`;
        }
        else if(certificate=="VoterID"){
        documents.innerHTML=`
        <h2>Required Documents</h2>
        <p>*All documents should be original and the documents are returned to the customers after application</p>
        <p>*Aadhar details must be correct</p>
        <ul type="none">
            <li>Photo</li>
            <li>Aadhaar Card</li>
            <li>10th Marksheet or Birth Certificate
            <li>Any one of the family member's Voter ID</li>
        </ul>`;
        }
    else{
        documents.innerHTML="<h2>Please select a certificate.</h2>";
    }

    documents.style.display="block";
}