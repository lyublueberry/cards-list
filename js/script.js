import {
    valueTarifNoNativeSpeakerPremium, valueTarifNotNativeSpeakerPartialAutoLesson, valueTarifNotNativeSpeaker, valueTarifNativeSpeaker,
    inputParametrElement, btnEnterElement, LINK_REQUEST,
    russianTeachBtnElement, premiumTtarifBtnElement, additionalPracticeBtnElement, englishTtechBtnElement, similarTemplateAdElement, 
    mainContainerElement, SHOW_ALERT_TIME
} from './const.js';

let valueSentData;
btnEnterElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    valueSentData = inputParametrElement.value;
    addCardsInMarker();
});

const getData = (onSuccess, onFail) => {
    fetch(LINK_REQUEST + valueSentData)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            onSuccess(data);
        })
        .catch((fail) => {
            onFail(fail);
        });
};

const addCardsInMarker = () => {
    getData(
        (cards) => {
            const priceListTabs = cards.data.filter(item => item.serviceTypeKey.includes("english_adult_"));//здесь получила интересующие нас карточки отфильтр 

            if (priceListTabs.length > 0) {
                const priceListNotNativeSpeaker = priceListTabs.filter(elem => elem.serviceTypeKey === valueTarifNotNativeSpeaker);
                const priceListNativeSpeaker = priceListTabs.filter(item => item.serviceTypeKey === valueTarifNativeSpeaker);
                const priceListNotNativeSpeakerPartialAutoLesson = priceListTabs.filter(item => item.serviceTypeKey === valueTarifNotNativeSpeakerPartialAutoLesson);
                const priceListNoNativeSpeakerPremium = priceListTabs.filter(item => item.serviceTypeKey === valueTarifNoNativeSpeakerPremium);

                if (priceListNotNativeSpeaker.length > 0) {
                    formationTariffСards(russianTeachBtnElement, priceListNotNativeSpeaker);
                }
                if (priceListNoNativeSpeakerPremium.length > 0) {
                    formationTariffСards(premiumTtarifBtnElement, priceListNoNativeSpeakerPremium);
                }
                if (priceListNotNativeSpeakerPartialAutoLesson.length > 0) {
                    formationTariffСards(additionalPracticeBtnElement, priceListNotNativeSpeakerPartialAutoLesson);
                }
                if (priceListNativeSpeaker.length > 0) {
                    formationTariffСards(englishTtechBtnElement, priceListNativeSpeaker);
                }
            }
            else { alert('карточек нет') }
        },
        () => showAlert('Ошибка в получении данных с сервера!'),
    );
};

const showAlert = (message) => {
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert-error');
    alertContainer.textContent = message;
    document.body.append(alertContainer);
    setTimeout(() => {
        alertContainer.remove();
    }, SHOW_ALERT_TIME);
};

const cardCreate = (item) => {
    for (let i = 0; i < item.positions.length; i++) {
        const adElement = similarTemplateAdElement.cloneNode(true);
        const quantityElement = adElement.querySelector('.quantity');
        const withoutDiscountElement = adElement.querySelector('.without-discount');
        const withoutDiscountRowElement = adElement.querySelector('.row-item.without');
        const costNowElement = adElement.querySelector('.cost-now');
        const benefitElement = adElement.querySelector('.benefit');
        const economyElement = adElement.querySelector('.economy');
        quantityElement.textContent = item.positions[i].quantity;
        withoutDiscountElement.textContent = item.positions[i].costWithoutDiscount;
        costNowElement.textContent = item.positions[i].cost;
        if((item.positions[i].costWithoutDiscount)<=(item.positions[i].cost)){
            withoutDiscountRowElement.style.display = 'none';
            economyElement.style.display = 'none';
        }
        benefitElement.textContent = (item.positions[i].costWithoutDiscount) - (item.positions[i].cost);
        mainContainerElement.appendChild(adElement);
    };
};

const isСontainerEempty = () => {
    if (mainContainerElement.children.length > 0) {
        mainContainerElement.replaceChildren();
    }
};

const formationTariffСards = (elem, dataArray) => {
    elem.style.display = 'flex';
    elem.addEventListener('click', (evt) => {
        evt.preventDefault();
        isСontainerEempty();
        dataArray.forEach((item) => {
            cardCreate(item);
        });
    });
};

