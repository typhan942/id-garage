const lg = {
  langCode: 'fr',
  lg: 'Français',
  header: {
    searchPlaceholder: 'N de commande/n de devis/nom du client',
    contact: 'Nous contacter',
    help: 'Aide',
    language: 'Langue',
  },
  menuRight: {
    home: 'Accueil',
    account: 'Mon compte',
    about: 'A propos',
    contact: 'Nous contacter',
    logout: 'Déconnecter',
  },
  signOut: {
    question: 'Etes-vous sur de vouloir vous déconnecter ?',
    confirm: 'Confirmer',
    cancel: 'Annuler',
  },
  planningHeader: {
    back: 'Retour',
    planning: 'Planning',
    valid: 'Validé(s)',
    toValidate: 'A valider',
    problems: 'Probleme(s) en cours',
    canceled: 'Annulé(s)',
  },
  planning: {
    title: 'Ma semaine type',
    week: 'Semaine',
    day: 'Jour',
    modify: 'Modifier le planning',
    addRDV: 'Ajouter un RDV',
    filterRDV: 'Filtrer mes RDV',
    with: 'Avec devis',
    without: 'Sans devis',
    quote: 'DEVIS',
    menuRight: {
      days: 'jours',
      hours: 'heures',
      cars: 'véhicules',
      infoDelay: 'de délai minimum avant RDV',
      infoWeekdays: 'disponible par jour/semaine',
      infoWeekends: 'disponible par jour/week-end',
      infoCars: 'de courtoisie',
      button: 'Ajouter des congés',
      months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      congesTitle: 'Mes congés',
      congesPeriod: 'Période du',
      congesError: 'Choisissez une date de la fin supérieure de la date de début de congés',
    },
    weekdaysShort: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    weekdays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    weekdaysFull: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samdi'],
    hours: 'Heures',
    closed: 'Férmé',
    modification: {
      modify: 'Modifier',
      closeWeek: 'Fermer toute la semaine',
      modalClose: 'Confirmez-vous la fermeture de la semaine ?',
      modalReopen: 'Confirmez-vous la reouverture de la semaine ?',
      modalDayClose: 'Confirmez-vous la fermeture de la journée du ',
      modalDayReopen: 'Confirmez-vous la reouverture de la journée du ',
      confirm: 'Oui',
      cancel: 'Non',
      openingHours: 'Horaire d\'ouverture',
      pause: 'Pause midi',
      availableHours: 'Nombres d’heures disponibles par semaine',
      congesPeriod: 'Période de congés',
      addItem: 'Ajouter un créneau',
      delItem: 'Supprimer ce congé',
      closeAll: 'Fermeture complète',
      saveButton: 'Enregistrer les modifications',
      errorHours: 'L\'heure est incorrecte',
      conges: 'Il y a déjà un congé le',
      congesModif: 'Modifier le congé',
      semaineType: {
        header: 'Modifier ma semaine type',
        delay: 'Délai minimum avant RDV',
        weekdays: 'Disponible par jour/semaine',
        weekends: 'Disponible par jour/week-end',
        cars: 'Nombre de véhicule de courtoisie',
      },
    },
  },
  devis: {
    intermediateRevision: 'Révision intermédiaire',
    button: 'Voir la commande',
    command: 'Commande N°',
    quote: 'DEVIS N°',
    sum: 'Montant HT :',
    total: 'Total',
    TotalExcludingDiscount: 'Total hors remise € HT',
    totalDiscountWithcoupon: 'Total remise € HT avec remise coupon',
    doYouReallyWantToCancel: 'Voulez vous vraiment annuler',
    amounToBeInvoiced: 'Montant à facturer au client si fourchette max € TTC',
  },
  contact: {
    header: 'Nous contacter',
    recipient: 'Destinataire*',
    message: 'Message',
    send: 'Envoyer',
    qAtext: 'Vous pouvez trouver les réponses à vos question dans notre rubrique',
    help: 'Aide',
    byPhone: 'Par telephone',
  },
  billingHeader: {
    commission: 'Commission RDV',
    asset: 'Avoirs (Coupon)',
    subscription: 'Abonnements',
    regularisation: 'Régularisation',
  },
  billing: {
    title: 'Sélectionnez une période',
    search: 'Rechercher',
    commission: {
      context: 'Contester',
      contest: 'Contester',
      pdfDownload: 'Télécharger en PDF',
      facture: 'Total Facture',
      base: 'Base TVA',
      taux: 'Taux',
      tva: 'TVA €',
      total: 'Total TTC à payer',
    },
    asset: {
      context: 'Contexte',
      contest: 'Contester',
      pdfDownload: 'Télécharger en PDF',
      facture: 'Total Facture',
      base: 'Base TVA',
      taux: 'Taux',
      tva: 'TVA €',
      total: 'Total TTC à payer',
    },
    subscription: {
      context: 'Contexte',
      contest: 'Contester',
      pdfDownload: 'Télécharger en PDF',
      facture: 'Total Facture',
      base: 'Base TVA',
      taux: 'Taux',
      tva: 'TVA €',
      total: 'Total TTC à payer',
    },
    regularisation: {
      context: 'Contexte',
      contest: 'Contester',
      pdfDownload: 'Télécharger en PDF',
      facture: 'Total Facture',
      base: 'Base TVA',
      taux: 'Taux',
      tva: 'TVA €',
      total: 'Total TTC à payer',
    },
    contest: {
      title: 'Contester la facture',
      subtitle: 'CLIENT',
      comment: 'Commentaire de contestation',
      signal: 'Votre contestation a bien été prise en compte',
      close: 'Fermer',
      cancel: 'Contester',
      back: 'Retour à la facturation',
      error: 'Veuillez écrire moins de 360 caractères',
    },
  },
  helpHeader: {
    faq: 'FAQ',
    homeHelp: 'Accueil aide',
    coupon: 'Coupon',
    commission: 'Accompte et commission',
    premiumPiece: 'Pièce prémium',
  },
  help: {
    helpHome: {
      title: 'Trouvez les réponses à vos questions',
      coupon: 'Opération Groupon - Comment ça marche ?',
      commission: 'Accompte client et commission - Comment ça marche ?',
      faq: 'FAQ générale',
      piece: 'Pièce prémium',
      plus: 'En savoir plus',
      questions: 'Voir toutes les questions',
    },
    piece: {
      question: 'Questions fréquentes',
      answer: 'Vous ne trouvez pas de réponse à vos questions ?',
      contact: 'Contactez-nous',
    },
    faq: {
      question: 'Questions fréquentes',
      answer: 'Vous ne trouvez pas de réponse à vos questions ?',
      contact: 'Contactez-nous',
    },
    coupon: {
      question: 'Questions fréquentes',
      answer: 'Vous ne trouvez pas de réponse à vos questions ?',
      contact: 'Contactez-nous',
    },
    commission: {
      question: 'Questions fréquentes',
      answer: 'Vous ne trouvez pas de réponse à vos questions ?',
      contact: 'Contactez-nous',
    },
  },
  command: {
    back: 'Retour planning',
    piece: 'Commander des pièces',
    print: 'Imprimer',
    regularisation: 'Régularisation',
    commandToPrint: {
      command: 'Commande',
      registration: 'Immatriculation',
      Minetype: 'Mine type',
      cnit: 'CNIT',
      car: 'Prise en charge du véhicule prévue le',
      total: 'Total de la commande',
      totalOutDiscount: 'Total hors remise € HT',
      totalDiscount: 'Total remise € HT',
      totalHT: 'TOTAL € HT',
      totalTVA: 'TVA €',
      billingTTC: 'Montant à facturer au client € TTC',
      billingMax: 'Montant à facturer au client si fourchette max € TTC',
    },
    detail: {
      rdvWithout: 'Rendez-vous sans Devis',
      issue: 'Signaler un problème',
      rdvConfirm: 'Confirmer le RDV web',
      quoteCanceled: 'Annuler le devis',
      quoteAsset: 'Devis avoir',
      canceled: 'Annuler la prestation',
      noteModification: 'Modifier la note',
      nodeRDV: 'Notes du Rendez-vous',
    },
    autossimo: {
      title: 'Besoin d\'une pièce ?',
      subtitle: 'Commandez vos pièces en ligne \n via Autossimo',
      piece: 'Commander des pièces',
      delivery: 'Livraison garantie !',
    },
    coupon: {
      attention: 'ATTENTION : veillez bien inclure en bas de facture le montant de réduction TTC'
                + 'qui vous sera \n remboursé par',
    },
    total: {
      title: 'Total de la commande',
      totalHorsRemise: 'Total hors remise € HT',
      totalAvecRemiseCoupon: 'Total € HT avec remise coupon',
      totalHT: 'TOTAL € HT',
      tva: 'TVA €',
      montantFacturer: 'Montant à facturer au client € TTC',
      fourchette: 'Montant à facturer au client si fourchette max € TTC',
      couponCode: 'Code promo',
      textLong: 'Nous n\'avons pas réussi à calculer directement en ligne cette demande de devis. Ainsi le devis sera a réaliser, par vos soins, au moment de l\'arrivée du véhicule.\n Une commission de 10 € HT vous sera facturée à la fin du mois pour l\'envoi de ce client (uniquement si l\'automobiliste a réalisé une prestation dans votre garage).',
    },
    lateral: {
      carCare: 'Prise en charge du véhicule',
      detailContact: 'Coordonnées',
      question: 'Une question ? Appelez-nous au 01 84 79 38 60',
      vehicle: 'Véhicule',
      registration: 'Immatriculation',
      mineType: 'Mine type',
      cnit: 'CNIT',
      engine: 'Code moteur',
      fuel: 'Code moteur',
      comment: 'Commentaire du client',
      recommended: 'Equipement Premium\n Préconisés',
      equipment: 'Aucun équipement imposé',
      why: 'Pourquoi ce montant ?',
      textlong: 'Lors de sa réservation le client a utilisé un coupon.\n Le montant du coupon vous sera intégralement remboursé.\n Ainsi à la fin de la prestation, le client vous réglera\n montant affiché en bas de votre commande.',
      total: 'Montant total',
      discount: 'Remise coupon',
      bill: 'Montant à régler',
      commission: 'Commission garage',
      subtitle: 'Pour cette commande vous serez facturé\n de',
      invoice: 'HT pour le RDV\n N°',
      prestation: 'si le client réalise une prestation',
      history: 'Historique',
      quoteValid: 'Devis validé',
      historyDate: '04/01/2020 09:06:48',
      quoteWaiting: 'Devis en Attente',
    },
    appointment: {
      title: 'Changer la date du rendez-vous',
      confirm: 'Confirmation de la modification du rdv',
      close: 'Fermer',
      changedDate: 'Modifier la date du rendez-vous',
      backCommand: 'Retour à la commande',
    },
    cancelQuote: {
      title: 'Annuler le devis',
      confirm: 'Veuillez confirmer l\'annulation du devis',
      close: 'Fermer',
      valid: 'Confirmer',
    },
    issue: {
      title: 'Signaler un problème',
      select: 'Sélectionnez le problème',
      number: 'Chiffrage devis',
      planning: 'Problème planning',
      other: 'Autre',
      subtitle: 'Merci de préciser la nature de l’erreur et préciser le nouveau tarif associé',
      confirm: 'Votre problème a bien été signalé.',
      close: 'Fermer',
      signal: 'Signaler le problème',
      back: 'Retour à la commande',
      error: 'Veuillez écrire au minimum 10 caractères',
    },
    note: {
      title: 'Modifier la note',
      subtitle: 'Notes du RDV',
      close: 'Fermer',
      changedNote: 'Modifier la note',
      error: 'Veuillez écrire au minimum 10 caractères',
    },
    refund: {
      title: 'Commande avoir',
      subtitle: 'Rembourser sous forme d\'avoir ?',
      close: 'Fermer',
      cancel: 'Modifier la note',
    },
    webAppointment: {
      title: 'Confirmer le RDV web',
      subtitle: 'Veuillez confirmer le rendez-vous web',
      close: 'Fermer',
      confirm: 'Confirmer',
    },
  },
  rates: {
    title: 'Prestations proposées',
    labourCost: 'Taux de main d\'oeuvre (M.O.) T1, T2, T3',
    pourcentage: 'Appliquer un pourcentage d\'ajustement sur ces taux',
    taux1: 'Taux méchanique 1 (T1)',
    taux2: 'Taux méchanique 2 (T2)',
    taux3: 'Taux méchanique 3 (T3)',
    register: 'Enregistrer les modifications',
    designation: 'Désignation',
    form: 'Votre formule',
    setting: 'Paramètres',
    clutch: 'Embrayage',
    preferences: 'Préférences devis en ligne',
    service: 'Je propose cette prestation : tarif des pièces (équipementier ou constructeur) et temps de main d’œuvre barêmés',
    help: 'Aide',
    helps: 'Aides',
    internet: 'Je ne souhaite pas proposer cette prestation sur internet',
    prestation: 'La prestation comprend',
    equipment: 'Equipementier',
    equipmentTitle: 'Choisissez votre équipementier',
    adjust: 'Appliquer un pourcentage d\'ajustement sur ces taux',
    piece: 'Pourcentage ajustement sur tarif public Pièces PREMIUM *',
    level: 'Mise à niveau',
    oil: 'Huile boîte de vitesse *',
    forfaitPres: 'Forfaits prestations associées',
    forfaitLiquide: 'Forfait remplacement liquide hydraulique *',
    forfaitClean: 'Forfait Nettoyant *',
    try: 'Essai routier',
    save: 'Enregistrer les modifications',
    close: 'Fermer',
    facturation: 'Adresse de facturation',
    pays: 'Identique à l\'adresse du garage',
    addAddress: 'Ajouter une adresse de facturation',
    bankInformation: 'Informations bancaires',
    iban: 'IBAN',
    messageIban: 'SIRET non valide',
    bic: 'BIC',
    messageBic: 'BIC non valide',
    change: 'En cas de changement de RIB, merci de nous le faire parvenir à ',
    requiredField: 'Ce champ est requis',
    validPostal: 'Code postal non valide',
    character: 'Le champ doit contenir au moins 3 caractères!',
    condition: 'Accepter les conditions générales de vente',
    description: 'Description',
    learn: 'Enseigne',
    commitments: 'Vos engagements',
    lastname: 'Nom*',
    firstname: 'Prénom*',
    garage: 'Nom du garage*',
    email: 'Email*',
    oldPassword: 'Ancien mot de passe*',
    passwords: 'Mot de passe*',
    newPassword: 'Nouveau mot de passe*',
    phone: 'Ligne fixe',
    portable: 'Portable',
    siret: 'SIRET*',
    rcs: 'RCS',
    addressStreet: 'Adresse*',
    additionalAddress: 'Complément d\'adresse',
    postal: 'Code postal*',
    city: 'Ville*',
    changeBackup: 'Voulez-vous enregistrer vos modifications',
    backup: 'Enregistrer',
    registered: 'Sauvegarder',
    confirmPassword: 'Confirmer le mot de passe*',
    saveModification: 'Vous avez des modifications non sauvegardées',
    informationGarage: 'Informations garage',
    password: 'Modifier mon mot de passe',
    garageAddress: 'Description',
    country: 'Pays*',
    next: 'A proximité de*',
    charter: 'Valider la charte de qualité',
    messageMail: 'Adresse mail non valide',
    messagePassword: 'Votre mot de passe doit contenir au moins 8 caractères , une Majuscule, un Chiffre',
    difference: 'Les deux mots de passe sont différent',
    messagePhone: 'Numéro de téléphone non valide',
    messageSiret: 'Numéro SIRET non valide',
    messageRCS: 'Numéro RCS non valide',
    messagePostalmessagePostal: 'Code postal non valide',
    break: 'Pause midi pour tous les jours',
    noBreak: 'Pas de pause midi',
    checkSchedules: 'Veuillez vérifier vos horaires',
  },
  quote: {
    back: 'Retour',
    validRdv: 'RDV validé',
    backPlanning: 'Revenir au planning',
    create: 'Créer un devis',
    addQuote: 'Ajouter un rdv avec devis',
    noQuote: 'Ajouter un rdv sans devis',
    choiceBrand: 'Choisir une marque',
    choiceModel: 'Choisir un modéle',
    choiceMotorisation: 'Choisir une motorisation',
    print: 'Imprimer',
    type: 'MINI TYPE',
    code: 'CODE MOTEUR',
    fuel: 'Carburant',
    attention: 'ATTENTION : Pour ce rendez-vous web nous avons identifié plusieurs références constructeur possible.\n  Vous devez vous assurer que la référence indiquée correspond bien à celle montée sur le véhicule du client.\n  Le détail du devis ci après se base sur la fourchette minimum.',
    designation: 'Désignation',
    unitHT: 'Prix unit. € HT',
    quantity: 'Qté. ou MO',
    discount: 'Remise en ligne',
    ht: 'Prix total € HT',
    ttc: 'Prix total € TTC',
    total: 'Total de la commande',
    totalOutDiscount: 'Total hors remise € HT ',
    totalDiscount: 'Total € HT avec remise coupon ',
    totalHT: 'TOTAL € HT ',
    tva: 'TVA € ',
    billingTTC: 'Montant à facturer au client € TTC € ',
    billingMax: 'Montant à facturer au client si fourchette max € TTC',
    previous: 'Précédent',
    rdv: 'Prise de RDV',
    validedRDV: 'Valider le RDV',
    validRDV: '"validez le rendez-vous"',
    dayOfRDV: 'Rendez-vous du jour,',
    noteRDV: 'Note du RDV',
    timeOfRDV: 'Temps de Rendez-vous (h)*',
    hour: 'heures',
    prestation: 'Prestation*',
    firstname: 'Nom du client*',
    messageField: 'Ce champ est requis',
    lastName: 'Prénom du client*',
    email: 'Email du client',
    emails: 'Email du client*',
    messageEmail: 'Adresse mail non valide',
    phone: 'Numéro de téléphone du client',
    messagePhone: 'Numéro de téléphone non valide',
    command: 'Commande',
    confirmation: 'Confirmation de prise de RDV',
    selectedCar: 'Sélection du véhicule',
    registration: 'Immatriculation',
    registrationLabel: 'immatriculation',
    model: 'Modéle',
    brand: 'Marque',
    engine: 'Motorisation',
    choice: 'Choisir une ou plusieurs prestation(s)',
    selectedServices: 'Prestations sélectionnées',
    date: 'Date et heure de prise en charge',
    search: 'Rechercher',
    emptySearch: 'Aucun resultat',
    save: 'Enregistrer',
    next: 'Suivant',
    download: 'Télécharger',
    selectionCar: 'Sélection du véhicule *',
    makeAppointment: 'Prendre un RDV ',
  },
  search: {
    result: 'Résultats pour la recherche',
    emptyResult: 'Pas de résultats pour',
    quote: 'DEVIS',
  },
  pdf: {
    command: {
      back: 'Prise en charge du véhicule prévue la Restitution au plus tard à',
      alert: 'ATTENTION : Pour ce rendez-vous web nous avons identifié plusieurs références constructeur\n   possible. Vous devez vous assurez que la référence indiquée correspond bien à celle montée\n  sur le véhicule du client. Le détail du devis ci après se base sur la fourchette\n  minimum.',
      command: 'Commande',
      designation: 'Désignation',
      price: 'Prix unit. € HT',
      qty: 'Qté. ou MO',
      discount: 'Remise en ligne',
      ht: 'Prix total € HT',
      ttc: 'Prix total € TTC',
      total: 'Total de la commande',
      totalOutDiscount: 'Total hors remise € HT',
      totalDiscount: 'Total remise € HT',
      totalHT: 'TOTAL € HT',
      totalTVA: 'TVA €',
      billing: 'Montant à facturer au client € TTC',
      billingMax: 'Montant à facturer au client si fourchette max € TTC',
    },
    commission: {
      best: 'LES MEILLEURS GARAGE AUX MEILLEURS PRIX',
      facturation: 'Facture',
      deliveryCustomer: 'Client livré',
      billingCustomer: 'Client facturé',
      referenceCustomer: 'Votre référence',
      paymentCustomer: 'Con. paiement / Mode paiement',
      sampleCustomer: 'PRELEVT AUTOMAT',
      accounting: 'SERVICE COMPTABILITE',
      deliveryAddress: 'Adresse de livraison',
      billingAddress: 'Adresse de facturation',
      ref: 'Ref commande',
      designation: 'Désignation',
      ht: 'Montant HT',
      attention: 'ATTENTION',
      textFooter1: '• Les rendez-vous non honorés doivent être indiqués à iDGARAGES avant le 15 du mois. Aucun remboursement ne pourra être réalisé après cette date',
      textFooter2: '• Les impayés seront soumis à une indemnité forfaitaire pour recouvrement.',
      textFooter3: 'En cas de retard de paiement, indemnité forfaitaire pour frais de recouvrement : 40 euros',
      textFooter4: 'Aucun escompte pour paiement anticipé',
      textFooter5: 'Selon la LME du 04/08/08, toute échéance non respectée donnera lieu de plein droit sans mise en demeure préalable, outre les frais',
      textFooter6: 'judiciaires, à une pénalité de retard au taux d\'intérêt pratiqué par la BCE majoré de 10 points',
      totalArticle: 'Total article',
      totalTVA: 'Total Hors TVA',
      tva: 'Base TVA',
      taux: 'Taux',
      billingTVA: 'Montant TVA',
      totalTTC: 'Total TTC à payer',
      couponTitle: 'Coupon à retourner avec le réglement',
      couponCustomer: 'N° Client',
      couponFacturation: 'N° Facture',
      couponBilling: 'Montant TTC',
      title: 'Extrait des conditions générales de vente et d\'utilisation ©',
      subtitle: 'La version intégrale des CGVU est consultable sur le site iDGARAGES.com. Les CGVU ont été dument acceptées par le garage adhérent',
      cgvu: 'Les présentes CGVU ont pour objet de définir les conditions et modalités de la mise à la disposition d\'un service de mise en relation entre des automobilistes (indifféremment « un client'
                + ' iDGARAGES.com » ou «utilisateur automobiliste ») cherchant un prestataire de service pour la réalisation de prestations d’entretien et de réparation automobile et des garages présentant'
                + ' leurs offres et leurs services (individuellement « un ou le garage adhérent » et collectivement « les garages adhérents »). Les présentes CGVU sont complétées ou modifiées, le cas échéant,'
                + ' par des conditions et modalités d\'utilisation spécifiques propres à certaines fonctionnalités.',
      titleCGVU: '1. ACCEPTATION DES CGVU',
      textCGVU: 'Le garage adhérent déclare et reconnaît avoir lu l\'intégralité des termes des présentes conditions générales. En outre, la connexion à l\'un quelconque des services proposés sur le site'
                + ' accessible à l\'adresse :www.iDGARAGES.com (ci-après le site Internet www.iDGARAGES.com) par l’intermédiaire de son espace dédié et sécurisé, accessible par un identifiant et un mot de'
                + ' passe (« Espace Garages ») emporte une acceptation sans réserve par le garage adhérent des présentes conditions générales.'
                + ' DIGITAL AFTERMARKET se réserve la possibilité de modifier à tout moment, en tout ou partie, les présentes CGVU. Il appartient en conséquence au garage utilisateur de consulter'
                + ' régulièrement la dernière version des CGVU affichée à l\'adresse http://www.idgarages.com/166-cgvu-garages. Le garage adhérent est réputé accepter cette dernière version à chaque nouvelle'
                + ' connexion sur le site, sur son espace dédié. […]',
      titleService: '3. ACCÈS AU SERVICE POUR LE GARAGE ADHÉRENT',
      textService: 'Accès à l’interface professionnelle iDGARAGES.com : « ESPACE GARAGES » - DIGITAL AFTERMARKET met à la disposition du garage adhérent une interface professionnelle lui permettant de'
                + ' gérer ses rendez-vous « iDGARAGES.com » et de paramétrer son offre, ses tarifs, son planning de rendez-vous iDGARAGES.com et les informations descriptives du garage. […]'
                + ' c. Service de réservation de rendez-vous en ligne - L’utilisateur automobiliste a la possibilité de prendre rendez-vous en ligne dans le garage adhérent qu’il a sélectionné pour réaliser une'
                + ' prestation d’entretien auto. […]'
                + ' Les rendez-vous iDGARAGES.com pris pour le compte du garage adhérent sont réputés confirmés par le garage adhérent, sans que DIGITAL AFTERMARKET n’ait à contacter le garage adhérent'
                + ' au préalable. Sauf cas exceptionnels et justifiés, le garage adhérent ne peut modifier ou refuser le rendez-vous iDGARAGES.com. Le garage adhérent est prévenu d’une réservation, d’une'
                + ' modification ou d’une annulation de rendez-vous dans son garage par email et, éventuellement, par téléphone, SMS, FAX, ou tout autre moyen de contact.'
                + ' Le garage adhérent s’engage à consulter ses emails au moins une fois par jour ouvré.'
                + ' Sauf cas exceptionnels et justifiés (par exemple, coupure d’accès à Internet), l’email constitue la seule preuve de réception et d’information de la réservation de rendez-vous et de la prestation'
                + ' auto demandée par le client iDGARAGES.com.'
                + ' Pour les prestations simples, le garage adhérent s’engage à exécuter la prestation réservée par le client iDGARAGES.com dans la journée du rendez-vous convenu. Au plus tard, le véhicule'
                + ' sera restitué au client iDGARAGES.com à 18h00. Le garage adhérent et le client iDGARAGES.com peuvent convenir d’un horaire de restitution avant 18h00.'
                + ' De façon exceptionnelle, le garage adhérent et le client iDGARAGES.com peuvent convenir de décaler le rendez-vous de quelques jours.'
                + ' Pour les prestations complexes, le garage adhérent s’engage à exécuter la prestation réservée par le client iDGARAGES.com dans les 48 heures du rendez-vous convenu.'
                + ' En cas d’indisponibilité des pièces nécessaires à l’intervention pour le jour du rendez-vous, le garage adhérent devra prévenir le client iDGARAGES.com au plus tôt et avant la date prévue du'
                + ' rendez-vous, pour fixer une nouvelle date de rendez-vous.'
                + ' En cas d’annulation du rendez-vous du fait du client iDGARAGES.com ou de non présentation du client iDGARAGES.com au rendez-vous, le garage adhérent doit en informer au plus vite'
                + ' DIGITAL AFTERMARKET et au plus tard dans les 3 jours ouvrés qui suivent la date initiale de rendez-vous. Après vérifications, DIGITAL AFTERMARKET ne facturera pas le garage adhérent des'
                + ' rendez-vous annulés ou non honorés. Passé le délai de 3 jours ouvrés, DIGITAL AFTERMARKET pourra facturer les commissions dues sur ces rendez-vous.'
                + ' DIGITAL AFTERMARKET n’encourt aucune responsabilité en cas de rendez-vous annulé ou non honoré par un client iDGARAGES.com. Le garage adhérent ne pourra demander aucun'
                + ' dédommagement à DIGITAL AFTERMARKET en cas de rendez-vous annulé ou non honoré par un client iDGARAGES.com.'
                + ' d. Service de proposition d’offre et de calcul de devis estimatifs […]'
                + ' DIGITAL AFTERMARKET propose sur son site www.iDGARAGES.com des devis estimatifs concernant des prestations qui sont calculés à partir de nombreuses informations techniques stockées'
                + ' en base de données par des fournisseurs tiers de bases de données. Ces informations sont compilées et exploitées avec le plus grand professionnalisme possible. Néanmoins, dans certains'
                + ' cas, le montant calculé peut s’avérer erroné et cela ne sera aucunement le fait de DIGITAL AFTERMARKET, ce que le garage adhérent reconnaît et accepte. Le garage adhérent renonce à tous'
                + ' recours à l’encontre de DIGITAL AFTERMARKET à ce sujet.'
                + ' En cas de montant erroné, le garage adhérent en informera immédiatement et directement l’utilisateur automobiliste et conviendra avec lui du juste prix pour la prestation souhaitée.'
                + ' L’utilisateur automobiliste pourra, s’il le souhaite, refuser cette nouvelle proposition et annuler sa réservation, sans aucun frais. DIGITAL AFTERMARKET ne pourra être tenue responsable des'
                + ' conséquences liées à cette annulation ou à ce changement de proposition.'
                + ' e. Service d’informations descriptives du garage adhérent'
                + ' Le site www.iDGARAGES.com, propose au garage adhérent de mettre en avant son garage en offrant la possibilité, via l’ESPACE GARAGES, rubrique « Mon compte », de paramétrer sa fiche'
                + ' descriptive. La plupart des informations descriptives seront proposées à visibilité des clients iDGARAGES.com.'
                + ' Le garage adhérent s’engage à renseigner cette fiche de façon objective et factuelle, et à la mettre à jour, le cas échéant.'
                + ' Le garage adhérent, s’il appartient à un réseau de garages, reconnaît disposer des droits d’utilisation des marques et logos de son réseau. Le garage adhérent autorise expressément DIGITAL'
                + ' AFTERMARKET à utiliser ces marques et logos uniquement pour le mettre en avant sur www.iDGARAGES.com, et garantit l’exercice paisible desdits droits d’utilisation.'
                + ' Il est formellement interdit au garage adhérent :'
                + ' - de citer des marques concurrentes- d’utiliser des marques, visuels, logos dont il n’a pas les droits d’utilisation - de dénigrer le service iDGARAGES.com'
                + ' - de proposer une mise en relation directe entre le client iDGARAGES.com et le garage adhérent - de dénigrer les autres garages'
                + ' - d’insérer des liens et/ou adresses de sites Internet'
                + ' - d’insérer des numéros de téléphone et/ou de fax'
                + ' - de tenir des propos ou d’insérer des contenus diffamatoires, injurieux, discriminatoires, illicites, contraires à l’ordre public et aux bonnes mœurs. Le garage adhérent est seul responsable des'
                + ' textes et informations fournies sur sa fiche descriptive.'
                + ' DIGITAL AFTERMARKET se réserve le droit de modérer, corriger, supprimer, reformuler tout ou partie des textes et informations renseignés par le garage adhérent sur sa fiche descriptive. Dans'
                + ' ce cas, le garage adhérent en sera informé par email. DIGITAL AFTERMARKET se réserve le droit de désinscrire de façon unilatérale tout garage adhérent qui ne respecterait pas ces'
                + ' dispositions. […]',
      titleChart: '4. CHARTE DE QUALITÉ IDGARAGES.COM',
      textChart: 'Tout garage qui souhaite être référencé sur www.iDGARAGES.com, doit adhérer sans exception ni réserve à la charte de qualité qui s’applique aux garages adhérents iDGARAGES.com.'
                + ' Cette charte porte sur des engagements de qualité sur lesquels le garage adhérent sera évalué par ses clients iDGARAGES.com.'
                + ' Cette charte de qualité est disponible à l’adresse suivante : http://www.idgarages.com/21-charte-qualite, ainsi que dans l’ESPACE GARAGES, rubrique « Mon compte ».'
                + ' En particulier, le garage adhérent doit souscrire les polices d’assurance nécessaires aux besoins de ses activités.',
      titleCondition: '7. CONDITIONS FINANCIÈRES, MODALITÉS DE PAIEMENT ET CONTESTATIONS',
      textCondition: 'Aucun frais d\'inscription n\'est prévu pour le service www.iDGARAGES.com pour le garage adhérent. Un abonnement de visibilité obligatoire de 15€ hors taxes par mois est obligatoire dès le'
                + ' premier mois d\'inscription. Une commission pour chaque rendez-vous est prélevée sur les bases suivantes :'
                + ' Pour chaque rendez-vous pris pour le compte du garage adhérent, ce dernier rémunérera DIGITAL AFTERMARKET d\'une commission variable selon le montant total du devis réservé par le'
                + ' client iDGARAGES.com : 10% du montant du devis réservé.'
                + ' Ce montant pourra être modifié par DIGITAL AFTERMARKET, ce que le garage adhérent reconnaît et accepte expressément.'
                + ' DIGITAL AFTERMARKET facturera chaque début de mois les commissions sur les rendez-vous réservés le mois précédent ainsi que l’abonnement.'
                + ' Les factures seront établies et disponibles sur son espace garage dans l’onglet facturation au plus tard le 5 du mois. Le prélèvement automatique sera effectué à partir du 15 du mois (ou le'
                + ' premier jour ouvré suivant le 15 si c’est un jour férié/non travaillé). Une même facture regroupera toutes les commissions des rendez-vous transmis et les abonnements souscrits.'
                + ' Seul le paiement par mandat de prélèvement SEPA est autorisé. En cas de paiement par chèque ou virement, DIGITAL AFTERMARKET pourra facturer des frais de traitement supplémentaires'
                + ' de 50 €ht par facture.',
      footer1: 'DIGITAL AFTERMARKET – 22, AVENUE ARISTIDE BRIAND – 94110 ARCUEIL',
      footer2: 'TEL : 01 69 79 89 89 – FAX : 01 69 79 89 90 – www.iDGARAGES.com Société à responsabilité limitée au capital de 1 750 000 €',
      footer3: 'RCS CRETEIL B 351 126 438 – SIRET 351 126 438 00057 – Code APE 6311Z – Numéro de TVA : FR35 351126438 00057',
    },
    avoirAdditional: {
      best: 'LES MEILLEURS GARAGE AUX MEILLEURS PRIX',
      avoir: 'Avoir',
      deliveryCustomer: 'Client livré',
      billingCustomer: 'Client facturé',
      referenceCustomer: 'Votre référence',
      paymentCustomer: 'Con. paiement / Mode paiement',
      sampleCustomer: 'PRELEVT AUTOMAT',
      accounting: 'SERVICE COMPTABILITE',
      deliveryAddress: 'Adresse de livraison',
      billingAddress: 'Adresse de facturation',
      designation: 'Désignation',
      ht: 'Montant HT',
      avoirAdd: 'Avoir additionnel',
      totalArticle: 'Total article',
      totalTVA: 'Total Hors TVA',
      tva: 'Base TVA',
      taux: 'Taux',
      billingTVA: 'Montant TVA',
      totalTTC: 'Total TTC à payer',
      attention: 'ATTENTION',
      textFooter1: 'En cas de retard de paiement, indemnité forfaitaire pour frais de recouvrement : 40 euros',
      textFooter2: 'Aucun escompte pour paiement anticipé',
      textFooter3: 'Selon la LME du 04/08/08, toute échéance non respectée donnera lieu de plein droit sans mise en demeure préalable, outre les frais',
      textFooter4: 'judiciaires, à une pénalité de retard au taux d\'intérêt pratiqué par la BCE majoré de 10 points',
      title: 'Extrait des conditions générales de vente et d\'utilisation ©',
      subtitle: 'La version intégrale des CGVU est consultable sur le site iDGARAGES.com. Les CGVU ont été dument acceptées par le garage adhérent',
      cgvu: 'Les présentes CGVU ont pour objet de définir les conditions et modalités de la mise à la disposition d\'un service de mise en relation entre des automobilistes (indifféremment « un client'
                + ' iDGARAGES.com » ou «utilisateur automobiliste ») cherchant un prestataire de service pour la réalisation de prestations d’entretien et de réparation automobile et des garages présentant'
                + ' leurs offres et leurs services (individuellement « un ou le garage adhérent » et collectivement « les garages adhérents »). Les présentes CGVU sont complétées ou modifiées, le cas échéant,'
                + ' par des conditions et modalités d\'utilisation spécifiques propres à certaines fonctionnalités.',
      titleCGVU: '1. ACCEPTATION DES CGVU',
      textCGVU: 'Le garage adhérent déclare et reconnaît avoir lu l\'intégralité des termes des présentes conditions générales. En outre, la connexion à l\'un quelconque des services proposés sur le site'
                + ' accessible à l\'adresse :www.iDGARAGES.com (ci-après le site Internet www.iDGARAGES.com) par l’intermédiaire de son espace dédié et sécurisé, accessible par un identifiant et un mot de'
                + ' passe (« Espace Garages ») emporte une acceptation sans réserve par le garage adhérent des présentes conditions générales.'
                + ' DIGITAL AFTERMARKET se réserve la possibilité de modifier à tout moment, en tout ou partie, les présentes CGVU. Il appartient en conséquence au garage utilisateur de consulter'
                + ' régulièrement la dernière version des CGVU affichée à l\'adresse http://www.idgarages.com/166-cgvu-garages. Le garage adhérent est réputé accepter cette dernière version à chaque nouvelle'
                + ' connexion sur le site, sur son espace dédié. […]',
      titleService: '3. ACCÈS AU SERVICE POUR LE GARAGE ADHÉRENT',
      textService: 'Accès à l’interface professionnelle iDGARAGES.com : « ESPACE GARAGES » - DIGITAL AFTERMARKET met à la disposition du garage adhérent une interface professionnelle lui permettant de'
                + ' gérer ses rendez-vous « iDGARAGES.com » et de paramétrer son offre, ses tarifs, son planning de rendez-vous iDGARAGES.com et les informations descriptives du garage. […]'
                + ' c. Service de réservation de rendez-vous en ligne - L’utilisateur automobiliste a la possibilité de prendre rendez-vous en ligne dans le garage adhérent qu’il a sélectionné pour réaliser une'
                + ' prestation d’entretien auto. […]'
                + ' Les rendez-vous iDGARAGES.com pris pour le compte du garage adhérent sont réputés confirmés par le garage adhérent, sans que DIGITAL AFTERMARKET n’ait à contacter le garage adhérent'
                + ' au préalable. Sauf cas exceptionnels et justifiés, le garage adhérent ne peut modifier ou refuser le rendez-vous iDGARAGES.com. Le garage adhérent est prévenu d’une réservation, d’une'
                + ' modification ou d’une annulation de rendez-vous dans son garage par email et, éventuellement, par téléphone, SMS, FAX, ou tout autre moyen de contact.'
                + ' Le garage adhérent s’engage à consulter ses emails au moins une fois par jour ouvré.'
                + ' Sauf cas exceptionnels et justifiés (par exemple, coupure d’accès à Internet), l’email constitue la seule preuve de réception et d’information de la réservation de rendez-vous et de la prestation'
                + ' auto demandée par le client iDGARAGES.com.'
                + ' Pour les prestations simples, le garage adhérent s’engage à exécuter la prestation réservée par le client iDGARAGES.com dans la journée du rendez-vous convenu. Au plus tard, le véhicule'
                + ' sera restitué au client iDGARAGES.com à 18h00. Le garage adhérent et le client iDGARAGES.com peuvent convenir d’un horaire de restitution avant 18h00.'
                + ' De façon exceptionnelle, le garage adhérent et le client iDGARAGES.com peuvent convenir de décaler le rendez-vous de quelques jours.'
                + ' Pour les prestations complexes, le garage adhérent s’engage à exécuter la prestation réservée par le client iDGARAGES.com dans les 48 heures du rendez-vous convenu.'
                + ' En cas d’indisponibilité des pièces nécessaires à l’intervention pour le jour du rendez-vous, le garage adhérent devra prévenir le client iDGARAGES.com au plus tôt et avant la date prévue du'
                + ' rendez-vous, pour fixer une nouvelle date de rendez-vous.'
                + ' En cas d’annulation du rendez-vous du fait du client iDGARAGES.com ou de non présentation du client iDGARAGES.com au rendez-vous, le garage adhérent doit en informer au plus vite'
                + ' DIGITAL AFTERMARKET et au plus tard dans les 3 jours ouvrés qui suivent la date initiale de rendez-vous. Après vérifications, DIGITAL AFTERMARKET ne facturera pas le garage adhérent des'
                + ' rendez-vous annulés ou non honorés. Passé le délai de 3 jours ouvrés, DIGITAL AFTERMARKET pourra facturer les commissions dues sur ces rendez-vous.'
                + ' DIGITAL AFTERMARKET n’encourt aucune responsabilité en cas de rendez-vous annulé ou non honoré par un client iDGARAGES.com. Le garage adhérent ne pourra demander aucun'
                + ' dédommagement à DIGITAL AFTERMARKET en cas de rendez-vous annulé ou non honoré par un client iDGARAGES.com.'
                + ' d. Service de proposition d’offre et de calcul de devis estimatifs […]'
                + ' DIGITAL AFTERMARKET propose sur son site www.iDGARAGES.com des devis estimatifs concernant des prestations qui sont calculés à partir de nombreuses informations techniques stockées'
                + ' en base de données par des fournisseurs tiers de bases de données. Ces informations sont compilées et exploitées avec le plus grand professionnalisme possible. Néanmoins, dans certains'
                + ' cas, le montant calculé peut s’avérer erroné et cela ne sera aucunement le fait de DIGITAL AFTERMARKET, ce que le garage adhérent reconnaît et accepte. Le garage adhérent renonce à tous'
                + ' recours à l’encontre de DIGITAL AFTERMARKET à ce sujet.'
                + ' En cas de montant erroné, le garage adhérent en informera immédiatement et directement l’utilisateur automobiliste et conviendra avec lui du juste prix pour la prestation souhaitée.'
                + ' L’utilisateur automobiliste pourra, s’il le souhaite, refuser cette nouvelle proposition et annuler sa réservation, sans aucun frais. DIGITAL AFTERMARKET ne pourra être tenue responsable des'
                + ' conséquences liées à cette annulation ou à ce changement de proposition.'
                + ' e. Service d’informations descriptives du garage adhérent'
                + ' Le site www.iDGARAGES.com, propose au garage adhérent de mettre en avant son garage en offrant la possibilité, via l’ESPACE GARAGES, rubrique « Mon compte », de paramétrer sa fiche'
                + ' descriptive. La plupart des informations descriptives seront proposées à visibilité des clients iDGARAGES.com.'
                + ' Le garage adhérent s’engage à renseigner cette fiche de façon objective et factuelle, et à la mettre à jour, le cas échéant.'
                + ' Le garage adhérent, s’il appartient à un réseau de garages, reconnaît disposer des droits d’utilisation des marques et logos de son réseau. Le garage adhérent autorise expressément DIGITAL'
                + ' AFTERMARKET à utiliser ces marques et logos uniquement pour le mettre en avant sur www.iDGARAGES.com, et garantit l’exercice paisible desdits droits d’utilisation.'
                + ' Il est formellement interdit au garage adhérent :'
                + ' - de citer des marques concurrentes- d’utiliser des marques, visuels, logos dont il n’a pas les droits d’utilisation - de dénigrer le service iDGARAGES.com'
                + ' - de proposer une mise en relation directe entre le client iDGARAGES.com et le garage adhérent - de dénigrer les autres garages'
                + ' - d’insérer des liens et/ou adresses de sites Internet'
                + ' - d’insérer des numéros de téléphone et/ou de fax'
                + ' - de tenir des propos ou d’insérer des contenus diffamatoires, injurieux, discriminatoires, illicites, contraires à l’ordre public et aux bonnes mœurs. Le garage adhérent est seul responsable des'
                + ' textes et informations fournies sur sa fiche descriptive.'
                + ' DIGITAL AFTERMARKET se réserve le droit de modérer, corriger, supprimer, reformuler tout ou partie des textes et informations renseignés par le garage adhérent sur sa fiche descriptive. Dans'
                + ' ce cas, le garage adhérent en sera informé par email. DIGITAL AFTERMARKET se réserve le droit de désinscrire de façon unilatérale tout garage adhérent qui ne respecterait pas ces'
                + ' dispositions. […]',
      titleChart: '4. CHARTE DE QUALITÉ IDGARAGES.COM',
      textChart: 'Tout garage qui souhaite être référencé sur www.iDGARAGES.com, doit adhérer sans exception ni réserve à la charte de qualité qui s’applique aux garages adhérents iDGARAGES.com.'
                + ' Cette charte porte sur des engagements de qualité sur lesquels le garage adhérent sera évalué par ses clients iDGARAGES.com.'
                + ' Cette charte de qualité est disponible à l’adresse suivante : http://www.idgarages.com/21-charte-qualite, ainsi que dans l’ESPACE GARAGES, rubrique « Mon compte ».'
                + ' En particulier, le garage adhérent doit souscrire les polices d’assurance nécessaires aux besoins de ses activités.',
      titleCondition: '7. CONDITIONS FINANCIÈRES, MODALITÉS DE PAIEMENT ET CONTESTATIONS',
      textCondition: 'Aucun frais d\'inscription n\'est prévu pour le service www.iDGARAGES.com pour le garage adhérent. Un abonnement de visibilité obligatoire de 15€ hors taxes par mois est obligatoire dès le'
                + ' premier mois d\'inscription. Une commission pour chaque rendez-vous est prélevée sur les bases suivantes :'
                + ' Pour chaque rendez-vous pris pour le compte du garage adhérent, ce dernier rémunérera DIGITAL AFTERMARKET d\'une commission variable selon le montant total du devis réservé par le'
                + ' client iDGARAGES.com : 10% du montant du devis réservé.'
                + ' Ce montant pourra être modifié par DIGITAL AFTERMARKET, ce que le garage adhérent reconnaît et accepte expressément.'
                + ' DIGITAL AFTERMARKET facturera chaque début de mois les commissions sur les rendez-vous réservés le mois précédent ainsi que l’abonnement.'
                + ' Les factures seront établies et disponibles sur son espace garage dans l’onglet facturation au plus tard le 5 du mois. Le prélèvement automatique sera effectué à partir du 15 du mois (ou le'
                + ' premier jour ouvré suivant le 15 si c’est un jour férié/non travaillé). Une même facture regroupera toutes les commissions des rendez-vous transmis et les abonnements souscrits.'
                + ' Seul le paiement par mandat de prélèvement SEPA est autorisé. En cas de paiement par chèque ou virement, DIGITAL AFTERMARKET pourra facturer des frais de traitement supplémentaires'
                + ' de 50 €ht par facture.',
      footer1: 'DIGITAL AFTERMARKET – 22, AVENUE ARISTIDE BRIAND – 94110 ARCUEIL',
      footer2: 'TEL : 01 69 79 89 89 – FAX : 01 69 79 89 90 – www.iDGARAGES.com Société à responsabilité limitée au capital de 1 750 000 €',
      footer3: 'RCS CRETEIL B 351 126 438 – SIRET 351 126 438 00057 – Code APE 6311Z – Numéro de TVA : FR35 351126438 00057',
    },
    avoirPartnership: {
      best: 'LES MEILLEURS GARAGE AUX MEILLEURS PRIX',
      avoir: 'Avoir',
      deliveryCustomer: 'Client livré',
      billingCustomer: 'Client facturé',
      referenceCustomer: 'Votre référence',
      paymentCustomer: 'Con. paiement / Mode paiement',
      sampleCustomer: 'PRELEVT AUTOMAT',
      accounting: 'SERVICE COMPTABILITE',
      deliveryAddress: 'Adresse de livraison',
      billingAddress: 'Adresse de facturation',
      ref: 'Ref commande',
      designation: 'Désignation',
      ht: 'Montant HT',
      totalArticle: 'Total article',
      totalTVA: 'Total Hors TVA',
      tva: 'Base TVA',
      taux: 'Taux',
      billingTVA: 'Montant TVA',
      totalTTC: 'Total TTC à payer',
      attention: 'ATTENTION',
      textFooter1: 'En cas de retard de paiement, indemnité forfaitaire pour frais de recouvrement : 40 euros',
      textFooter2: 'Aucun escompte pour paiement anticipé',
      textFooter3: 'Selon la LME du 04/08/08, toute échéance non respectée donnera lieu de plein droit sans mise en demeure préalable, outre les frais',
      textFooter4: 'judiciaires, à une pénalité de retard au taux d\'intérêt pratiqué par la BCE majoré de 10 points',
      title: 'Extrait des conditions générales de vente et d\'utilisation ©',
      subtitle: 'La version intégrale des CGVU est consultable sur le site iDGARAGES.com. Les CGVU ont été dument acceptées par le garage adhérent',
      cgvu: 'Les présentes CGVU ont pour objet de définir les conditions et modalités de la mise à la disposition d\'un service de mise en relation entre des automobilistes (indifféremment « un client'
                + ' iDGARAGES.com » ou «utilisateur automobiliste ») cherchant un prestataire de service pour la réalisation de prestations d’entretien et de réparation automobile et des garages présentant'
                + ' leurs offres et leurs services (individuellement « un ou le garage adhérent » et collectivement « les garages adhérents »). Les présentes CGVU sont complétées ou modifiées, le cas échéant,'
                + ' par des conditions et modalités d\'utilisation spécifiques propres à certaines fonctionnalités.',
      titleCGVU: '1. ACCEPTATION DES CGVU',
      textCGVU: 'Le garage adhérent déclare et reconnaît avoir lu l\'intégralité des termes des présentes conditions générales. En outre, la connexion à l\'un quelconque des services proposés sur le site'
                + ' accessible à l\'adresse :www.iDGARAGES.com (ci-après le site Internet www.iDGARAGES.com) par l’intermédiaire de son espace dédié et sécurisé, accessible par un identifiant et un mot de'
                + ' passe (« Espace Garages ») emporte une acceptation sans réserve par le garage adhérent des présentes conditions générales.'
                + ' DIGITAL AFTERMARKET se réserve la possibilité de modifier à tout moment, en tout ou partie, les présentes CGVU. Il appartient en conséquence au garage utilisateur de consulter'
                + ' régulièrement la dernière version des CGVU affichée à l\'adresse http://www.idgarages.com/166-cgvu-garages. Le garage adhérent est réputé accepter cette dernière version à chaque nouvelle'
                + ' connexion sur le site, sur son espace dédié. […]',
      titleService: '3. ACCÈS AU SERVICE POUR LE GARAGE ADHÉRENT',
      textService: 'Accès à l’interface professionnelle iDGARAGES.com : « ESPACE GARAGES » - DIGITAL AFTERMARKET met à la disposition du garage adhérent une interface professionnelle lui permettant de'
                + ' gérer ses rendez-vous « iDGARAGES.com » et de paramétrer son offre, ses tarifs, son planning de rendez-vous iDGARAGES.com et les informations descriptives du garage. […]'
                + ' c. Service de réservation de rendez-vous en ligne - L’utilisateur automobiliste a la possibilité de prendre rendez-vous en ligne dans le garage adhérent qu’il a sélectionné pour réaliser une'
                + ' prestation d’entretien auto. […]'
                + ' Les rendez-vous iDGARAGES.com pris pour le compte du garage adhérent sont réputés confirmés par le garage adhérent, sans que DIGITAL AFTERMARKET n’ait à contacter le garage adhérent'
                + ' au préalable. Sauf cas exceptionnels et justifiés, le garage adhérent ne peut modifier ou refuser le rendez-vous iDGARAGES.com. Le garage adhérent est prévenu d’une réservation, d’une'
                + ' modification ou d’une annulation de rendez-vous dans son garage par email et, éventuellement, par téléphone, SMS, FAX, ou tout autre moyen de contact.'
                + ' Le garage adhérent s’engage à consulter ses emails au moins une fois par jour ouvré.'
                + ' Sauf cas exceptionnels et justifiés (par exemple, coupure d’accès à Internet), l’email constitue la seule preuve de réception et d’information de la réservation de rendez-vous et de la prestation'
                + ' auto demandée par le client iDGARAGES.com.'
                + ' Pour les prestations simples, le garage adhérent s’engage à exécuter la prestation réservée par le client iDGARAGES.com dans la journée du rendez-vous convenu. Au plus tard, le véhicule'
                + ' sera restitué au client iDGARAGES.com à 18h00. Le garage adhérent et le client iDGARAGES.com peuvent convenir d’un horaire de restitution avant 18h00.'
                + ' De façon exceptionnelle, le garage adhérent et le client iDGARAGES.com peuvent convenir de décaler le rendez-vous de quelques jours.'
                + ' Pour les prestations complexes, le garage adhérent s’engage à exécuter la prestation réservée par le client iDGARAGES.com dans les 48 heures du rendez-vous convenu.'
                + ' En cas d’indisponibilité des pièces nécessaires à l’intervention pour le jour du rendez-vous, le garage adhérent devra prévenir le client iDGARAGES.com au plus tôt et avant la date prévue du'
                + ' rendez-vous, pour fixer une nouvelle date de rendez-vous.'
                + ' En cas d’annulation du rendez-vous du fait du client iDGARAGES.com ou de non présentation du client iDGARAGES.com au rendez-vous, le garage adhérent doit en informer au plus vite'
                + ' DIGITAL AFTERMARKET et au plus tard dans les 3 jours ouvrés qui suivent la date initiale de rendez-vous. Après vérifications, DIGITAL AFTERMARKET ne facturera pas le garage adhérent des'
                + ' rendez-vous annulés ou non honorés. Passé le délai de 3 jours ouvrés, DIGITAL AFTERMARKET pourra facturer les commissions dues sur ces rendez-vous.'
                + ' DIGITAL AFTERMARKET n’encourt aucune responsabilité en cas de rendez-vous annulé ou non honoré par un client iDGARAGES.com. Le garage adhérent ne pourra demander aucun'
                + ' dédommagement à DIGITAL AFTERMARKET en cas de rendez-vous annulé ou non honoré par un client iDGARAGES.com.'
                + ' d. Service de proposition d’offre et de calcul de devis estimatifs […]'
                + ' DIGITAL AFTERMARKET propose sur son site www.iDGARAGES.com des devis estimatifs concernant des prestations qui sont calculés à partir de nombreuses informations techniques stockées'
                + ' en base de données par des fournisseurs tiers de bases de données. Ces informations sont compilées et exploitées avec le plus grand professionnalisme possible. Néanmoins, dans certains'
                + ' cas, le montant calculé peut s’avérer erroné et cela ne sera aucunement le fait de DIGITAL AFTERMARKET, ce que le garage adhérent reconnaît et accepte. Le garage adhérent renonce à tous'
                + ' recours à l’encontre de DIGITAL AFTERMARKET à ce sujet.'
                + ' En cas de montant erroné, le garage adhérent en informera immédiatement et directement l’utilisateur automobiliste et conviendra avec lui du juste prix pour la prestation souhaitée.'
                + ' L’utilisateur automobiliste pourra, s’il le souhaite, refuser cette nouvelle proposition et annuler sa réservation, sans aucun frais. DIGITAL AFTERMARKET ne pourra être tenue responsable des'
                + ' conséquences liées à cette annulation ou à ce changement de proposition.'
                + ' e. Service d’informations descriptives du garage adhérent'
                + ' Le site www.iDGARAGES.com, propose au garage adhérent de mettre en avant son garage en offrant la possibilité, via l’ESPACE GARAGES, rubrique « Mon compte », de paramétrer sa fiche'
                + ' descriptive. La plupart des informations descriptives seront proposées à visibilité des clients iDGARAGES.com.'
                + ' Le garage adhérent s’engage à renseigner cette fiche de façon objective et factuelle, et à la mettre à jour, le cas échéant.'
                + ' Le garage adhérent, s’il appartient à un réseau de garages, reconnaît disposer des droits d’utilisation des marques et logos de son réseau. Le garage adhérent autorise expressément DIGITAL'
                + ' AFTERMARKET à utiliser ces marques et logos uniquement pour le mettre en avant sur www.iDGARAGES.com, et garantit l’exercice paisible desdits droits d’utilisation.'
                + ' Il est formellement interdit au garage adhérent :'
                + ' - de citer des marques concurrentes- d’utiliser des marques, visuels, logos dont il n’a pas les droits d’utilisation - de dénigrer le service iDGARAGES.com'
                + ' - de proposer une mise en relation directe entre le client iDGARAGES.com et le garage adhérent - de dénigrer les autres garages'
                + ' - d’insérer des liens et/ou adresses de sites Internet'
                + ' - d’insérer des numéros de téléphone et/ou de fax'
                + ' - de tenir des propos ou d’insérer des contenus diffamatoires, injurieux, discriminatoires, illicites, contraires à l’ordre public et aux bonnes mœurs. Le garage adhérent est seul responsable des'
                + ' textes et informations fournies sur sa fiche descriptive.'
                + ' DIGITAL AFTERMARKET se réserve le droit de modérer, corriger, supprimer, reformuler tout ou partie des textes et informations renseignés par le garage adhérent sur sa fiche descriptive. Dans'
                + ' ce cas, le garage adhérent en sera informé par email. DIGITAL AFTERMARKET se réserve le droit de désinscrire de façon unilatérale tout garage adhérent qui ne respecterait pas ces'
                + ' dispositions. […]',
      titleChart: '4. CHARTE DE QUALITÉ IDGARAGES.COM',
      textChart: 'Tout garage qui souhaite être référencé sur www.iDGARAGES.com, doit adhérer sans exception ni réserve à la charte de qualité qui s’applique aux garages adhérents iDGARAGES.com.'
                + ' Cette charte porte sur des engagements de qualité sur lesquels le garage adhérent sera évalué par ses clients iDGARAGES.com.'
                + ' Cette charte de qualité est disponible à l’adresse suivante : http://www.idgarages.com/21-charte-qualite, ainsi que dans l’ESPACE GARAGES, rubrique « Mon compte ».'
                + ' En particulier, le garage adhérent doit souscrire les polices d’assurance nécessaires aux besoins de ses activités.',
      titleCondition: '7. CONDITIONS FINANCIÈRES, MODALITÉS DE PAIEMENT ET CONTESTATIONS',
      textCondition: 'Aucun frais d\'inscription n\'est prévu pour le service www.iDGARAGES.com pour le garage adhérent. Un abonnement de visibilité obligatoire de 15€ hors taxes par mois est obligatoire dès le'
                + ' premier mois d\'inscription. Une commission pour chaque rendez-vous est prélevée sur les bases suivantes :'
                + ' Pour chaque rendez-vous pris pour le compte du garage adhérent, ce dernier rémunérera DIGITAL AFTERMARKET d\'une commission variable selon le montant total du devis réservé par le'
                + ' client iDGARAGES.com : 10% du montant du devis réservé.'
                + ' Ce montant pourra être modifié par DIGITAL AFTERMARKET, ce que le garage adhérent reconnaît et accepte expressément.'
                + ' DIGITAL AFTERMARKET facturera chaque début de mois les commissions sur les rendez-vous réservés le mois précédent ainsi que l’abonnement.'
                + ' Les factures seront établies et disponibles sur son espace garage dans l’onglet facturation au plus tard le 5 du mois. Le prélèvement automatique sera effectué à partir du 15 du mois (ou le'
                + ' premier jour ouvré suivant le 15 si c’est un jour férié/non travaillé). Une même facture regroupera toutes les commissions des rendez-vous transmis et les abonnements souscrits.'
                + ' Seul le paiement par mandat de prélèvement SEPA est autorisé. En cas de paiement par chèque ou virement, DIGITAL AFTERMARKET pourra facturer des frais de traitement supplémentaires'
                + ' de 50 €ht par facture.',
      footer1: 'DIGITAL AFTERMARKET – 22, AVENUE ARISTIDE BRIAND – 94110 ARCUEIL',
      footer2: 'TEL : 01 69 79 89 89 – FAX : 01 69 79 89 90 – www.iDGARAGES.com Société à responsabilité limitée au capital de 1 750 000 €',
      footer3: 'RCS CRETEIL B 351 126 438 – SIRET 351 126 438 00057 – Code APE 6311Z – Numéro de TVA : FR35 351126438 00057',
    },
  },
  login: {
    emailPassword: 'Veuillez entrer votre email et votre mot de passe',
    email: 'Veuillez entrer votre email',
    password: 'Veuillez entrer votre mot de passe',
    emailPattern: 'Veuillez entrer un email valide',
    passwordPattern: 'Votre mot de passe doit contenir au moins 8 caractères , une Majuscule, un Chiffre',
    exist: 'Cette email n\'existe pas dans notre api',
    incorrect: 'Email ou Mot de passe incorrecte',
    title: 'Connectez-vous',
    emailField: 'Email*',
    passwordField: 'Mot de passe*',
    connectButton: 'Se connecter',
    forgotPassword: 'Mot de passe perdu ?',
  },
  reset: {
    email: 'Veuillez entrer votre email',
    emailPattern: 'Veuillez entrer un email valide',
    title: 'Vous avez oublié votre mot de passe ?',
    subtitle: 'Entrez votre adresse e-mail afin de recevoir un lien de réinitialisation de mot de passe',
    emailField: 'Nom du garage',
    button: 'Recevoir un e-mail',
  },
  resetPassword: {
    passwordConfirm: 'Veuillez remplir votre nouveau mot de passe et le confirmer',
    newPassword: 'Veuillez remplir votre nouveau mot de passe',
    confirmPassword: 'Veuillez confirmer votre mot de passe',
    passwordMatch: 'Les deux mots de passe sont différent',
    passwordPattern: 'Votre mot de passe doit contenir au moins 8 caractères , une Majuscule, un Chiffre',
    title: 'Modifier votre mot de passe',
    subtitle: 'Entrer un nouveau mot de passe',
    passwordField: 'Nouveau mot de passe*',
    confirmField: 'Confirmation de mot de passe*',
    confirmButton: 'Confirmer',
  },
  loginGarage: {
    garage: 'Veuillez entrer un garage',
    email: 'Veuillez entrer un email',
    emailPattern: 'Veuillez entrer un email valide',
    code: 'Veuillez entrer un code réparateur',
    codePattern: 'Veuillez entrer un code valide',
    title: 'Entrez dans un garage par :',
    socialRaison: 'Raison Sociale',
    emailAdress: 'Adresse email',
    codeRep: 'Code réparateur',
    garageField: 'Nom du garage',
    emailField: 'Email',
    codeField: 'Code réparateur',
    connectButton: 'Entrer',
    deconnectionButton: 'Déconnexion',
  },
  account: {
    civility: 'Civilité*',
    garage: 'Nom du garage*',
    adresseGarage: 'Adresse garage',
    lastname: 'Nom*',
    firstname: 'Prénom*',
    title: 'Informations principales',
    read: 'Visualiser votre fiche en ligne',
    info: 'Infos garages',
    description: 'Description',
    timetable: 'Horaires',
    bank: 'Infos bancaires',
    service: 'Services',
    serviceSertification: 'Services et certifications',
    servicePlus: 'Services plus',
    see: 'Aide',
    readHelp: 'Lire',
    france: 'France',
    belgium: 'Belgique',
    yourStrongPoints: 'Vos points forts',
  },
  loginMobile: {
    changedPassword: 'Changer de mot de passe',
  },
  resetPasswordMobile: {
    title: 'Mot de passe oublié',
    subtitle: 'Entrez votre adresse e-mail afin de recevoir un lien de rénitialisation de votre mot de passe.',
    email: 'E-mail *',
  },
  aboutMobile: {
    version: 'Version de l\'application',
    info: 'Infos légal',
    cgv: 'CGV',
  },
  planningMobile: {
    to: 'au',
    modifTitle: 'Modifier mon planning',
    fermeture: 'L\'ensemble des jours seront fermés sur la période saisie sur votre planning',
  },
  commandMobile: {
    total: 'TOTAL',
    quantity: 'Qté. ou MO',
    unitPrice: 'Prix unit. € HT',
    totalHT: 'Prix total € HT',
    totalTTC: 'Prix total € TTC',
    discount: 'Remise en ligne',
    attention: 'ATTENTION',
    attentionText: 'Veuillez à bien inclure en bas de facture le montant de cette réduction TTC qui vous sera remboursé par IDGARAGES.com',
    valid: 'Valider',
    signal: 'Signaler',
    noComment: 'Aucun commentaire du client',
    modificationDate: 'Modifier la date',
    dateSelect: 'Sélectionnez une date',
    hourSelect: 'Sélectionnez l\'horaire',
    modificationNote: 'Modifier la note',
    note: 'Note du RDV',
    signalTitle: 'Signaler un problème',
    signalSelect: 'Sélectionnez le problème *',
    signalText: 'Nature de l’erreur et nouveau tarif associé *',
    rdvWithout: 'Rendez-vous sans devis',
    quote: 'DEVIS N°',
    save: 'Enregistrer',
    cancel: 'Annuler',
    return: 'Retour à la commande',
    signalRetour: 'Votre problème a bien été signalé',
  },
  navigationCommand: {
    planning: 'Planning',
    message: 'Message',
    customer: 'Client',
    car: 'Véhicule',
    equipment: 'Equipement',
  },
  searchMobile: {
    title: 'Recherche',
    result: 'résultats de recherche',
    placeholder: 'Devis/nom/commande',
  },
  invoice: {
    header: {
      title: 'Facturation',
    },
    topTap: {
      commission: 'Comission(s) Rdv',
      coupon: 'Avoir(s) (Coupons)',
      subscription: 'Abonnement',
      regulation: 'Régularisation(s)',
    },
    selectPeriod: {
      title: 'Sélectionner une période',
      periodType: {
        year: 'Année entière',
        month: 'Mois',
      },
    },
    totalPrice: {
      baseTva: 'Base TVA',
      tax: 'Taux',
      tva: 'TVA €',
    },
    invoiceItem: {
      totalInvoice: 'Total facture',
      totalPrice: 'Prix total € TTC',
      numeroInvoice: 'Facture N°',
      amountHT: 'Montant € HT',
      signal: 'Contester',
      client: 'Client',
    },
    signal: {
      title: 'Contester la facture',
      inputLabel: "Nature de l\'erreur et nouveau tarif associé",
      inputPlaceHolder: 'Préciser votre problème',
      save: 'Enregistrer',
      textEmptyValidation: 'Veuillez saisir le commentaire',
      successMessage: 'Votre contestation a été bien enregistrée',
      goBack: 'Retourner à la facture',
    },
  },
  stat: {
    title: 'Statistiques',
    period: {
      title: 'Sélectionnez une période',
    },
    navbar: {
      visibility: 'Visiblité',
      sell: 'Ventes',
    },
    filters: {
      all: 'Tout',
      ad: 'AD',
      garage: 'IDgarage',
    },
    visibility: {
      search: 'Rechercher',
      visible: {
        all: 'Tout',
        ad: 'AD.fr',
        idGarage: 'IDgarages.com',
        contact: 'Demandes de contact',
        contactText: 'Nombre d\'automobiliste qui ont demandé votre numéro de téléphone',
        asset: 'Vues Annuaires',
        assetText: 'Nombre d\'automobiliste qui ont consulté l\'adresse de votre garage',
        compare: 'Vues Devis',
        compareText: 'Nombre d\'automobiliste qui ont comparé vos devis avec d\'autres gens',
        browsed: 'Vues informations détaillées de votre garage',
        browseText: 'Nombre d\'automobiliste qui ont parcouru la fiche de votre garage',
      },
    },
    sell: {
      all: 'Tout',
      ad: 'AD.fr',
      idGarage: 'IDgarages.com',
      rdv: 'Nombre de rendez-vous',
      rdvText: 'Nombre de rendez-vous générés',
      ca: 'CA HT',
      caText: 'Chiffre d\'affaires apporté à votre garage',
      cart: 'Panier moyen HT',
      cartText: 'Prix moyen des devis générés',
    },
  },
  month: {
    1: 'Janvier',
    2: 'Février',
    3: 'Mars',
    4: 'Avril',
    5: 'Mai',
    6: 'Juin',
    7: 'Juillet',
    8: 'Aout',
    9: 'Septembre',
    10: 'Octobre',
    11: 'Novembre',
    12: 'Décembre',
  },
  tarifsMobile: {
    taxes: 'Taux de main d’oeuvre',
    header: 'Tarifs',
  },
  offlineStatus: {
    connecttheInternet: 'Connectez-vous à internet',
    checkConnection: 'Désolé... Vous n\'êtes pas connecté à Internet, Veuillez vérifiez votre connexion',
  },
};
export default lg;
