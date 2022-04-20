const LINK_REQUEST = 'https://corporate-marketing-backend.skyeng.ru/landing/public/v2/prices/by-preferred-link/';
const btnEnterElement = document.querySelector('.btn-send');
const inputParametrElement = document.querySelector('.name-parametr');
const russianTeachBtnElement = document.querySelector('.russian-teach');
const premiumTtarifBtnElement = document.querySelector('.premium-tarif');
const additionalPracticeBtnElement = document.querySelector('.additional-practice');
const englishTtechBtnElement = document.querySelector('.english-tech');
const similarTemplateAdElement = document.querySelector('#card').content.querySelector('.card-item');
const mainContainerElement = document.querySelector('.main');
const SHOW_ALERT_TIME = 5000;
const valueTarifNotNativeSpeaker = "english_adult_not_native_speaker";
const valueTarifNativeSpeaker = "english_adult_native_speaker";
const valueTarifNotNativeSpeakerPartialAutoLesson = "english_adult_not_native_speaker_partial_auto_lesson";
const valueTarifNoNativeSpeakerPremium = "english_adult_not_native_speaker_premium";

export {valueTarifNoNativeSpeakerPremium, valueTarifNotNativeSpeakerPartialAutoLesson, valueTarifNotNativeSpeaker, valueTarifNativeSpeaker,
    btnEnterElement, inputParametrElement, LINK_REQUEST,
    russianTeachBtnElement, premiumTtarifBtnElement, additionalPracticeBtnElement, englishTtechBtnElement, 
    similarTemplateAdElement, mainContainerElement, SHOW_ALERT_TIME
};