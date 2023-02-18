const data = JSON.parse(dataInfo);

const content = document.querySelector('.content');

data.forEach(element => {
    const contentBox = document.createElement('div');
    contentBox.classList.add('content-box');

    const personageImg = document.createElement('img');
    personageImg.classList.add('personage_img');
    personageImg.setAttribute('alt', element.alt);
    personageImg.src = element.image;

    const personageContent = document.createElement('div');
    personageContent.classList.add('personage_content');

    const personageStatus = document.createElement('h4');
    personageStatus.textContent = element.status;

    const personageSpecies = document.createElement('h4');
    personageSpecies.textContent = element.species;

    const personageType = document.createElement('h4');
    personageType.textContent = element.type;

    const personageGender = document.createElement('h3');
    personageGender.textContent = element.gender;

    const personageText = document.createElement('p');
    personageText.classList.add('personage_text');
    personageText.textContent = element.fact;

    const personageName = document.createElement('h2');
    personageName.classList.add('personage-name');
    personageName.textContent = element.name;

    personageContent.appendChild(personageStatus);
    personageContent.appendChild(personageSpecies);
    personageContent.appendChild(personageType);
    personageContent.appendChild(personageGender);
    personageContent.appendChild(personageText);
    contentBox.appendChild(personageName);
    contentBox.appendChild(personageImg);
    contentBox.appendChild(personageContent);
    content.appendChild(contentBox);
});