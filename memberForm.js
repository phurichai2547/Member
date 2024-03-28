import { memberManagement } from "./member.js";

const {findMember} = memberManagement() 


function memberForm() {
    const addEventHandler = () => {
        const memberbutton = document.getElementById('member');
        memberbutton.addEventListener('click',memberHandler);
    }

    const memberHandler = () => {
        const searchMemberDiv = document.getElementById('searchMember');
        searchMemberDiv.innerHTML = '';
        
        const searchPanel =  document.createElement('div');
        searchPanel.innerHTML = `<p>Your Member Id: </p>
        <input id="memberId" type="number">
        <button id="searchButton">Search</button>`

        searchMemberDiv.appendChild(searchPanel);

        const searchButton = document.getElementById('searchButton');
        searchButton.addEventListener('click', searchHandler);
    }

    const searchHandler = () => {
        const memberIdInput = document.getElementById('memberId');
        const memberId = parseInt(memberIdInput.value);

        const foundMemberDiv = document.getElementById('foundMember');
        foundMemberDiv.innerHTML = ''; 

        const member = findMember(memberId);
        if (member) {
            const memberDetails = document.createElement('div');
            memberDetails.innerHTML = `
            <p>id: ${member.id}</p>
            <p>firstname: ${member.firstname}</p>
            <p>lastname: ${member.lastname}</p>
            <p>email: ${member.email}</p>
            <p>address: ${member.address}</p>
          `;
            foundMemberDiv.appendChild(memberDetails);
        } else {
            foundMemberDiv.textContent = 'Member not found.';
        }
    }


    return {
        addEventHandler
    }
}

const { addEventHandler } = memberForm();
addEventHandler();


