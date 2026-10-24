/* Exercises per chapter for esame.html. Questions in English (as in the exam), explanations in Italian.
   quiz:  [stem, question, options, correct index, why]
   match: [statement, concept, why]   (link the statement to the right concept)
   sort:  {cats:[...], items:[[text, cat index, why]]} */
window.EX = {
1:{t:"Beliefs, values & assumptions",
 quiz:[
  ["","According to the course, a need arises from…",["A specific product offer","A subjectively perceived deficiency","A market price","A legal obligation"],1,"Cap. 1: il bisogno nasce da una mancanza percepita soggettivamente. Diventa want quando si trasforma in un desiderio specifico che ci si può permettere, e domanda quando incontra un'offerta sul mercato."],
  ["","In economics, scarcity means that…",["Some products are temporarily sold out","Only a finite amount of resources exists, while needs are seen as unlimited","Prices are always rising","Organizations should stop growing"],1,"Scarsità = risorse finite rispetto a bisogni considerati illimitati. Il corso la tratta come un'assunzione che produce comportamenti, non come un fatto neutro."],
  ["A start-up's founders believe that \"resources are scarce and only the best survive\". They introduce rankings, individual bonuses and strict cost targets.","What does this illustrate?",["Polanyi's reciprocity","How an underlying assumption turns into values, behavior and organizational practices","Requisite variety","Mimetic isomorphism"],1,"È la catena del cap. 1: assunzione → valori → comportamento → pratiche organizzative. Le assunzioni sulla scarsità diventano competizione, classifiche, obiettivi di efficienza."],
  ["","Which assumption is the reversed one used in class to imagine an alternative organization?",["Human needs are unlimited","Human well-being does not require unlimited consumption","Competition always creates the most value","Resources should always go to the highest bidder"],1,"Nella riflessione #2 si rovescia l'assunzione: il benessere non richiede consumo illimitato. Valori: sufficiency, sostenibilità, equità; comportamenti: condividere, riparare, riusare, collaborare."],
  ["","What is the key learning of chapter 1 for analyzing organizations?",["Always start from the org chart","Look for the hidden assumption about people, needs, scarcity, competition or value","Markets solve every coordination problem","Values cannot influence structures"],1,"Closing del cap. 1: chiediti sempre cosa diamo per scontato su persone, bisogni, scarsità, competizione, cooperazione, valore, successo, proprietà, crescita. Le decisioni ripetute trasformano le assunzioni in strutture."],
  ["A cooperative grocery shop assumes that \"cooperation can create more value than competition\".","Which practice fits this assumption best?",["Individual sales rankings for staff","Shared decision-making and profit sharing among members","Strict hierarchical approvals","Aggressive price competition with neighbours"],1,"Se cambi l'assunzione cambiano le pratiche: cooperazione → decisioni condivise, condivisione dei risultati. Le classifiche individuali vengono dall'assunzione opposta."]],
 match:[
  ["\"I feel something is missing.\"","Need","Il bisogno: una mancanza percepita soggettivamente."],
  ["\"I want that specific bike and I can afford it.\"","Want","Want: il bisogno diventa un desiderio specifico che ci si può permettere."],
  ["\"Customers are buying 2,000 of these bikes a month.\"","Demand","Domanda: i want che incontrano un'offerta sul mercato."],
  ["\"There will never be enough for everyone, so we must optimize.\"","Scarcity assumption","L'assunzione di scarsità porta a efficienza, competizione, ottimizzazione."],
  ["\"We have enough if we share and repair.\"","Sufficiency","Il valore che nasce dall'assunzione rovesciata."],
  ["\"Why do we take growth for granted here?\"","Questioning a hidden assumption","È la domanda chiave del cap. 1: trovare l'assunzione nascosta."]],
 sort:{intro:"Which assumption does each practice most likely come from?",cats:["Scarcity & competition","Sufficiency & cooperation"],items:[
  ["Individual bonuses and rankings",0,"Competizione tra individui: tipica dell'assunzione di scarsità."],
  ["A repair café inside the company",1,"Riparare e riusare: sufficiency."],
  ["Efficiency targets for every team",0,"Ottimizzare risorse scarse."],
  ["Tools shared between departments",1,"Condivisione e collaborazione."],
  ["Growth as the main success measure",0,"Crescita continua: logica dei bisogni illimitati."],
  ["Long-term partnerships with suppliers instead of auctions",1,"Cooperazione e orizzonte lungo invece della competizione sul prezzo."]]}},

2:{t:"Economic & social context",
 quiz:[
  ["","Karl Polanyi argued that the economy is…",["A self-regulating machine separate from society","Embedded in society and shaped by social institutions","Only about market prices","Irrelevant for organizations"],1,"Polanyi (The Great Transformation, 1944): l'economia è un processo sociale incorporato nella società; le organizzazioni sono a loro volta incorporate nell'economia."],
  ["A friend helps you move apartment. Next year you help her paint her flat.","Which form of integration is this?",["Market exchange","Redistribution","Reciprocity","Agency"],2,"Reciprocity: dare e ricevere sulla base di relazioni e obblighi reciproci, senza prezzi."],
  ["","Receiving unemployment benefits is an example of…",["Reciprocity","Redistribution","Market exchange","Institutional isomorphism"],1,"Un'autorità centrale raccoglie risorse (contributi, tasse) e le ridistribuisce: redistribution."],
  ["","What characterizes market exchange in Polanyi's sense?",["Exchange based on personal obligations","Exchange through prices, supply and demand, often between strangers","Collection and allocation by a central actor","Gifts within families"],1,"Market exchange: soldi e prezzi, transazioni basate su domanda e offerta più che su relazioni personali."],
  ["Inside a company, the budget is collected at headquarters and allocated to departments; colleagues also help each other informally; and products are sold to customers at market prices.","What does this show?",["Only market exchange exists in companies","Several coordination logics can exist at the same time","Polanyi's categories do not apply to organizations","Redistribution is always inefficient"],1,"Domanda di discussione in classe: le categorie non sono sempre nette e più logiche convivono. Budget = redistribution, aiuto tra colleghi = reciprocity, vendita = market."],
  ["","Which definition of economy matches the course?",["The totality of institutions and actions that serve the systematic satisfaction of needs","The stock market","Only private companies","Government spending"],0,"Cap. 2: l'economia è l'insieme di istituzioni e azioni che servono a soddisfare sistematicamente i bisogni, e include cultura, valori, educazione."]],
 match:[
  ["\"I give you a hand, and someday someone will help me.\"","Reciprocity","Relazioni e obblighi reciproci, niente prezzi."],
  ["\"The canton collects taxes and funds the university.\"","Redistribution","Raccolta e ridistribuzione da un'autorità centrale."],
  ["\"I bought a coffee for CHF 4.50.\"","Market exchange","Prezzo, domanda, offerta."],
  ["\"The economy is a social process, not a separate machine.\"","Embeddedness (Polanyi)","L'idea centrale di Polanyi."],
  ["\"Several logics can work at the same time.\"","Mixed coordination","Le categorie si sovrappongono nella realtà."]],
 sort:{intro:"Market, redistribution or reciprocity?",cats:["Market","Redistribution","Reciprocity"],items:[
  ["Buying a train ticket",0,"Scambio a prezzo."],
  ["Paying taxes",1,"Esempio della slide."],
  ["Neighbours lending each other tools",2,"Obbligo reciproco, niente prezzo."],
  ["Unemployment benefits",1,"Esempio della slide."],
  ["Selling a used phone online",0,"Prezzo tra sconosciuti."],
  ["Cooking dinner for your family",2,"Relazione e obbligo, non prezzo."],
  ["A head office allocating budgets to departments",1,"Centro che raccoglie e distribuisce."],
  ["Volunteers editing Wikipedia",2,"Contributo basato su una comunità, non su un prezzo."]]}},

3:{t:"Organizational theories",
 quiz:[
  ["","Which question drove classical organization theory?",["How do people feel at work?","How can work be organized efficiently at scale?","Why do firms exist?","How do organizations gain legitimacy?"],1,"Classica (1900s): industrializzazione, fabbriche enormi. Domanda: come organizzare il lavoro in modo efficiente? Taylor, Fayol, Weber."],
  ["Workers' productivity rose in the Hawthorne studies regardless of whether light was increased or decreased.","Which conclusion led to the Human Relations school?",["Lighting is irrelevant to work","Attention, social relations and informal groups influence performance","Workers only respond to money","Standardization raises output"],1,"Hawthorne: le persone rispondono all'attenzione e ai gruppi informali, non solo alle condizioni fisiche e al salario."],
  ["","\"Organizations must jointly optimize technology and people.\" This is the core of…",["Agency theory","Sociotechnical systems theory","Institutional theory","Scientific management"],1,"Sistemi e sociotecnica (Trist & Emery): tecnologia + persone vanno ottimizzate insieme; l'organizzazione è un sistema aperto."],
  ["","Which pair is correctly matched?",["Woodward: technology shapes the right structure","Coase: bounded rationality","Simon: transaction costs","Mayo: bureaucracy"],0,"Joan Woodward (contingency): la tecnologia di produzione influenza la struttura adatta. Coase = teoria dell'impresa, Simon = bounded rationality, Mayo = Hawthorne."],
  ["A firm asks whether to produce a component internally or buy it, depending on how costly contracts and monitoring would be.","Which theory fits?",["Transaction cost economics (Williamson)","Human Relations","Institutional theory","Classical theory"],0,"Make or buy secondo il costo delle transazioni: Williamson. Le organizzazioni esistono quando coordinare dentro costa meno del mercato."],
  ["","Which pressure is NOT one of the institutional pressures named in the course?",["Regulation","Professional norms","Imitation of successful organizations","Lower production costs"],3,"Institutional theory: regolazione, norme professionali, imitazione. I costi più bassi sono una logica di efficienza, cioè proprio ciò che la teoria istituzionale dice che non spiega tutto."],
  ["","What is a typical blind spot of the classical lens?",["It ignores efficiency","It can neglect motivation, flexibility and the informal organization","It overestimates the environment","It focuses too much on legitimacy"],1,"Limite della classica: l'efficienza può andare a scapito di flessibilità, autonomia e motivazione."],
  ["","What is a typical blind spot of the institutional lens?",["It ignores legitimacy","It may underestimate efficiency and internal performance problems","It focuses only on technology","It assumes perfect information"],1,"Dalle tabelle Theory Detective: la lente istituzionale vede la legittimità, ma può sottovalutare i problemi di performance interna."]],
 match:[
  ["\"Find the one best way to do each task and standardize it.\"","Taylor · scientific management","Analisi scientifica del compito e standardizzazione."],
  ["\"Authority should rest on rules and positions, not persons.\"","Weber · bureaucracy","Burocrazia razionale."],
  ["\"Managers plan, organize, command, coordinate and control.\"","Fayol · administrative management","Le funzioni del manager."],
  ["\"People choose a solution that is good enough.\"","Simon · bounded rationality","Satisficing."],
  ["\"There is no one best way to organize.\"","Contingency theory","Il design dipende dal contesto."],
  ["\"Shareholders and managers may want different things.\"","Agency theory","Principal e agent."],
  ["\"We adopted it because everyone in our industry has it.\"","Institutional theory","Legittimità e imitazione."],
  ["\"Change one part and others are affected.\"","Systems theory","Tutto è interconnesso."],
  ["\"Recognition and belonging matter as much as pay.\"","Human Relations","Le persone non sono solo pezzi del sistema produttivo."]],
 sort:{intro:"Which theory left this practice behind? (\"What remains today\")",cats:["Classical","Human Relations","Decision-making","Contingency"],items:[
  ["Job descriptions and org charts",0,"Eredità classica."],
  ["Employee engagement surveys",1,"Eredità Human Relations."],
  ["Approval processes and decision rights",2,"Eredità della teoria decisionale."],
  ["Agile teams in one unit, stable processes in another",3,"Strutture diverse per contesti diversi."],
  ["KPIs and standardized procedures",0,"Misurare e standardizzare."],
  ["Leadership development and team building",1,"Leadership e gruppi contano."],
  ["Management information systems",2,"Migliorare le informazioni per decidere."]]}},

4:{t:"Purpose, stakeholders & value creation",
 quiz:[
  ["","How does the course define an organization?",["Any group of people","A social entity that is goal-directed, deliberately structured and coordinated, and connected to its environment","A legal company with shareholders","A set of processes"],1,"Definizione delle slide del cap. 4: entità sociale orientata a uno scopo, strutturata e coordinata deliberatamente, collegata all'ambiente esterno."],
  ["","\"The advantage of specialization creates the problem of…\"",["Scarcity","Coordination","Legitimacy","Motivation"],1,"Frase chiave: il vantaggio della specializzazione crea il problema del coordinamento."],
  ["","Which list names the four fundamental challenges of organizing?",["Direction, division of work, coordination, cooperation","Planning, staffing, budgeting, reporting","Purpose, vision, mission, goals","Market, redistribution, reciprocity, agency"],0,"Le quattro domande: direction (cosa vogliamo ottenere), division of work (chi fa cosa), coordination (come si ricompone il lavoro), cooperation (perché le persone contribuiscono)."],
  ["","Which statement about purpose is correct?",["Purpose is a measurable quarterly target","Purpose is the organization's reason for being","Purpose describes the reporting lines","Purpose is the same as strategy"],1,"Purpose = ragione d'essere (direction, significance, aspiration, unification, motivation). I goals sono misurabili, la strategy dice come competere."],
  ["After one year, public funding for the HSLU lunch service drops by 40% and CO₂ must fall by 30%.","What is the main lesson of this twist?",["Organizations can ignore stakeholders","Purpose, stakeholder expectations and environmental conditions shape how work is organized","Structure should stay fixed","Only customers matter"],1,"Takeaway dell'esercizio: le organizzazioni non si organizzano nel vuoto. Il contesto cambia priorità e conflitti tra stakeholder."],
  ["","Can an organization always create maximum value for all stakeholders at the same time?",["Yes, if the strategy is good","No, stakeholder interests can conflict and require trade-offs","Yes, through redistribution","Only in non-profits"],1,"Domanda di osservazione del corso: gli interessi degli stakeholder possono entrare in conflitto (es. rendimento per i proprietari contro salari o sostenibilità)."]],
 match:[
  ["\"Why do we exist?\"","Purpose","Ragione d'essere."],
  ["\"What future do we want to help create?\"","Vision","Il futuro desiderato."],
  ["\"How will we succeed?\"","Strategy","Scelte su dove e come competere."],
  ["\"Reduce waiting time to 10 minutes by June.\"","Goal","Risultato specifico e misurabile."],
  ["\"Who does what?\"","Division of work","Una delle quattro sfide."],
  ["\"Why would people want to contribute?\"","Cooperation","Motivazione a contribuire."]],
 sort:{intro:"What does each stakeholder mainly expect? (course list)",cats:["Customers","Employees","Owners","Government","Society"],items:[
  ["Quality and value for money",0,"Clienti → qualità / valore."],
  ["Meaningful and fair work",1,"Dipendenti."],
  ["Returns and long-term sustainability",2,"Proprietari."],
  ["Compliance with laws",3,"Stato."],
  ["Responsible behavior",4,"Società."]]}},

5:{t:"Work, structures, processes & coordination",
 quiz:[
  ["","What does centralization describe?",["How many people report to one manager","Where important decisions are made","How strongly work is governed by rules","How narrowly work is divided"],1,"Centralization = dove si prendono le decisioni. Span of control = quanti riporti; formalization = regole; specialization = quanto è diviso il lavoro."],
  ["","A role needs more than responsibility. Which combination does the course name?",["Responsibility, authority, capability, decision rights","Salary, title, office, team","Purpose, vision, mission, goals","Rules, procedures, standards, KPIs"],0,"Slide \"What a role needs to work\": responsabilità, autorità, capacità, decision rights. Responsabilità senza autorità è un problema classico."],
  ["","Which is the typical challenge of a divisional structure?",["Functional silos","Duplicated functions and higher costs","Unclear authority with two bosses","No customer focus"],1,"Divisionale: focus su clienti/mercati, ma funzioni duplicate e costi più alti. I silos sono il problema della funzionale; due capi è la matrice."],
  ["","Structures are usually vertical. Processes…",["Only exist inside one department","Often run horizontally across departments","Replace structures","Are the same as hierarchy"],1,"Takeaway: le strutture sono verticali, i processi corrono in orizzontale attraverso di esse."],
  ["","Delegation means…",["Giving away accountability","Transferring decision authority to lower levels while maintaining accountability","Removing hierarchy","Outsourcing work"],1,"Delega = trasferire l'autorità decisionale verso il basso mantenendo l'accountability."],
  ["Each department of a company meets its targets, but customers wait because orders get stuck between Sales, Operations and Finance.","What does the course recommend looking at?",["Span of control","Handovers, interfaces and end-to-end process ownership","More specialization","A new logo"],1,"Ogni passaggio tra unità può creare attese, perdita di informazioni, rilavorazioni, ownership poco chiara. Il process owner guarda l'intero flusso."],
  ["","Vertical coordination works through…",["Cross-functional teams and liaison roles","Supervision, escalation, reporting, targets, policies","Communities of practice","Market prices"],1,"Verticale: attraverso i livelli (supervisione, escalation, reporting). Orizzontale: tra team e reparti (team interfunzionali, ruoli di collegamento)."],
  ["","Which statement reflects the course's view of structures?",["The matrix is the best structure","Every form is a response to a coordination problem, with its own trade-off","Functional structures are outdated","Network organizations need no coordination"],1,"\"Every form is a response to a coordination problem.\" Nessuna struttura è universalmente superiore: è la contingency."]],
 match:[
  ["Expertise and efficiency, but silos","Functional structure","Raggruppa per competenza."],
  ["Customer or market focus, but duplication","Divisional structure","Raggruppa per prodotto, cliente o area."],
  ["Integration of two dimensions, but complexity","Matrix structure","Funzioni × prodotti."],
  ["Flexibility and speed, but coordination across teams","Team / project structure","Lavoro organizzato in team."],
  ["Access to capabilities, but less control","Network organization","Partner, ecosistemi, piattaforme."],
  ["Predictability, but less flexibility","Formalization","Regole esplicite."]],
 sort:{intro:"Hotel chain with 80 hotels: centralize or decentralize?",cats:["Centralize","Decentralize"],items:[
  ["Brand service standards",0,"Coerenza e qualità del marchio: soluzione del corso."],
  ["Strategic supplier frameworks",0,"Scala e potere negoziale: soluzione del corso."],
  ["Small customer refunds",1,"Servono velocità e conoscenza locale."],
  ["Local marketing events",1,"Conoscenza del mercato locale."],
  ["Opening hours of the hotel restaurant",1,"Dipende dalla situazione locale."],
  ["IT security rules",0,"Rischio e standard comuni."]]}},

6:{t:"Complexity, adaptation & viability",
 quiz:[
  ["","Effectiveness vs. efficiency: which is correct?",["Effectiveness = doing things right","Efficiency = doing the right things","Effectiveness = doing the right things; efficiency = doing things right","They mean the same"],2,"Effectiveness: stiamo ottenendo i risultati voluti? Efficiency: usiamo bene le risorse?"],
  ["","Which metaphor sees the organization as learning, processing information and self-organizing?",["Machine","Organism","Brain","Bureaucracy"],2,"Machine = controllo e prevedibilità; organism = adattamento all'ambiente; brain = apprendimento, informazione, intelligenza distribuita."],
  ["","In a complex situation (Cynefin), the right response is…",["Sense, categorize, respond","Sense, analyze, respond","Probe, sense, respond","Act, sense, respond"],2,"Complex: sperimentare (probe), osservare, rispondere. Clear: sense-categorize-respond. Complicated: sense-analyze-respond. Chaotic: act-sense-respond."],
  ["","Informal leaders appearing and employees inventing workarounds are examples of…",["Formalization","Emergence","Centralization","Redistribution"],1,"Emergence: non tutto è progettato; leader informali, routine, cultura, workaround nascono dall'interazione."],
  ["More pressure leads to higher workload, more mistakes and more rework, which leads to even more pressure.","What is this?",["A balancing loop","A reinforcing feedback loop","Requisite variety","Double-loop learning"],1,"Esempio delle slide: in un sistema complesso la soluzione di oggi può diventare il problema di domani."],
  ["","Organizational viability means the ability to…",["Maximize profit this quarter","Function today, survive changing conditions and keep developing for the future","Avoid all change","Control every part centrally"],1,"Tre prospettive: functioning, survival, development."],
  ["","Which tension belongs to coherence?",["Exploration ↔ exploitation","Transformation ↔ stability","Autonomy ↔ control","Efficiency ↔ effectiveness"],2,"Ambidexterity = exploration/exploitation; adaptability = transformation/stability; coherence = autonomy/control."],
  ["","What does the course say about hierarchy in complex environments?",["Hierarchy is useless","Hierarchy alone is insufficient","Hierarchy solves complexity","Hierarchy should be replaced by markets"],1,"\"This does not mean hierarchy is useless. It means hierarchy alone is insufficient.\" Servono autoregolazione e varietà di risposta."]],
 match:[
  ["\"Only variety can absorb variety.\"","Ashby's law","Requisite variety."],
  ["\"All models are wrong, but some are useful.\"","George Box","I modelli sono semplificazioni utili."],
  ["\"How can autonomy, coordination and adaptation coexist?\"","Viable System Model","La domanda del VSM nelle slide."],
  ["\"How is the organization embedded in its broader environment?\"","St. Gallen Management Model","La domanda del SGMM."],
  ["\"Innovate and also exploit what works.\"","Ambidexterity","Exploration ↔ exploitation."],
  ["\"Clear purpose, boundaries, information and decision authority.\"","Self-organization","Gli attori ricevono cornici, non ordini."]],
 sort:{intro:"Cynefin: which kind of situation?",cats:["Clear","Complicated","Complex","Chaotic"],items:[
  ["Monthly payroll processing",0,"Procedura nota."],
  ["Onboarding with a checklist",0,"Esempio della slide."],
  ["Optimizing a supply-chain network",1,"Serve analisi esperta: esempio della slide."],
  ["Changing leadership behavior across a company",2,"Esempio della slide."],
  ["A sudden factory fire",3,"Esempio della slide: prima si agisce."],
  ["Launching a product in a market that does not exist yet",2,"Causa-effetto non prevedibile: si sperimenta."],
  ["Repairing a complex machine with the manual",1,"Tante parti, ma analizzabile."]]}},

7:{t:"People, culture & organizational learning",
 quiz:null, /* uses the chapter 7 drill already in esame.html */
 match:[
  ["\"People avoid work and need close supervision.\"","Theory X","Assunzione di McGregor che porta a controllo."],
  ["\"People can self-direct and accept responsibility.\"","Theory Y","Porta a delega e autonomia."],
  ["\"I have influence over how I work.\"","Autonomy (SDT)","Uno dei tre bisogni di Deci & Ryan."],
  ["\"Are we doing the right things?\"","Double-loop learning","Mette in discussione le assunzioni."],
  ["\"We can admit mistakes without being humiliated.\"","Psychological safety","Edmondson."],
  ["\"Failure is information for learning.\"","Growth mindset","Dweck."],
  ["\"A group that learns together around a shared practice.\"","Community of practice","Wenger."],
  ["\"How we do things around here, and why.\"","Culture (Schein)","La definizione breve."]],
 sort:{intro:"Schein: which level of culture?",cats:["Artifact","Espoused value","Underlying assumption"],items:[
  ["Open-plan office without private rooms",0,"Si vede."],
  ["\"Customer first\" on the website",1,"Ciò che si dichiara."],
  ["\"Mistakes are dangerous\"",2,"Convinzione profonda, data per scontata."],
  ["Everyone wears a hoodie, even the CEO",0,"Abbigliamento: artifact."],
  ["\"Speed over perfection\" as a slogan",1,"È nell'esempio delle slide come espoused value."],
  ["\"Leaders should have all the answers\"",2,"Esempio della slide."],
  ["Stories told about the founder",0,"Storie e simboli: artifact."],
  ["\"Conflict should be avoided\"",2,"Esempio della slide."]]}}
};

/* hard mode: near-miss distractors, 45 seconds per question, feedback only at the end */
window.HARD=[
 ["A team keeps missing deadlines. The manager introduces daily status meetings and a stricter tracking tool. Deadlines improve slightly, but nobody asks whether the team is working on the right projects.","Which description is most precise?",["Double-loop learning focused on efficiency","Single-loop learning: correcting action while keeping assumptions","Effectiveness without efficiency","Requisite variety"],1,"Correggere l'azione (riunioni, tool) senza mettere in discussione obiettivi o assunzioni = single-loop. Nota la parentela con efficiency, ma la domanda chiede il tipo di apprendimento."],
 ["","Which statement best distinguishes centralization from formalization?",["Both describe where decisions are made","Centralization is about where decisions are made; formalization is about how strongly work follows explicit rules","Formalization is about the number of levels","Centralization is about written procedures"],1,"Due concetti diversi che all'esame vengono confusi: dove si decide contro quanto è scritto in regole."],
 ["A bank introduces a diversity report because regulators require it, and a design-thinking lab because all competitors have one.","Which institutional pressures are at work, in order?",["Imitation, then regulation","Regulation, then imitation","Professional norms, then regulation","Efficiency, then imitation"],1,"Report = richiesto dal regolatore (regulation). Lab = copiare i concorrenti (imitation, isomorfismo mimetico)."],
 ["","Which is NOT part of psychological safety as defined in the course?",["Admitting mistakes without excessive interpersonal risk","Disagreeing with the manager","Being protected from accountability for results","Proposing ideas"],2,"La trappola: psychological safety non significa assenza di accountability."],
 ["Managers in a firm say \"We trust our people\" (official value). Every expense over CHF 50 needs two signatures.","Using Schein, where is the contradiction?",["Between two artifacts","Between an espoused value and the underlying assumption revealed by the control system","Between two underlying assumptions","There is no contradiction"],1,"\"We trust our people\" = espoused value. La regola delle due firme è un artifact che rivela un'assunzione opposta (\"non ci si può fidare\")."],
 ["","Complicated vs. complex: which statement is correct?",["Complex systems have more parts than complicated ones","In complicated systems cause and effect can largely be analyzed; in complex systems actors interact and change, so effects are not fully predictable","Complicated systems cannot be analyzed","Complex means chaotic"],1,"Non è il numero di parti: è la prevedibilità delle relazioni causa-effetto."],
 ["A global company lets each country decide almost everything. Country teams react fast, but the brand looks different everywhere and best practices are not shared.","Which viability tension is out of balance, and toward which side?",["Ambidexterity, toward exploration","Coherence, toward autonomy","Adaptability, toward stability","Coherence, toward control"],1,"Autonomia molto alta, poca coerenza e coordinamento: la tensione autonomy ↔ control è sbilanciata verso l'autonomia."],
 ["","Agency theory vs. transaction cost economics: which statement is correct?",["Both explain why firms exist","Agency theory is about diverging interests between principals and agents; transaction cost economics explains when to coordinate inside the firm instead of the market","Transaction cost economics is about motivation","Agency theory explains make-or-buy decisions"],1,"Due teorie economiche diverse: interessi divergenti (agency) contro costo di coordinamento interno vs mercato (Coase, Williamson)."],
 ["A company has a strong informal network of experts across units who solve problems together. Management wants to \"formalize it\" with targets, a budget owner and monthly reports.","What is the main risk from the course's perspective?",["The network becomes too fast","Turning a community of practice into another formal unit can destroy the voluntary, practice-based exchange that made it work","Requisite variety increases too much","There is no risk; formal is always better"],1,"Una community of practice vive di interazione volontaria intorno a una pratica. Formalizzarla troppo la trasforma in un'altra unità e può ucciderla."],
 ["","Which example best shows organizational (not only individual) learning?",["An employee takes an online course","A team discusses an error once","After an incident, the checklist and onboarding are changed so that new staff act differently","A manager reads a book on leadership"],2,"Apprendimento organizzativo = l'apprendimento si incorpora in processi e routine, così altri agiscono diversamente anche senza la persona originale."],
 ["","Theory Y and Human Relations are related. What does chapter 7 add with McGregor?",["That money is the only motivator","That management assumptions about people become organizational structures","That informal groups do not exist","That hierarchy must be abolished"],1,"Il takeaway della slide: le assunzioni del management diventano strutture (e possono autoavverarsi)."],
 ["A university cafeteria gets public subsidies from the canton, sells meals at fixed prices, and student volunteers help on weekends.","Which logics are present?",["Only market exchange","Redistribution, market exchange and reciprocity","Only redistribution","Only reciprocity"],1,"Sussidio pubblico = redistribution; pasti a prezzo = market; volontari = reciprocity. Più logiche convivono."],
 ["","Ashby's law applied to structure suggests that…",["All unusual cases should go to one expert manager","Response capacity should sit where the variety of situations is","Standardization always absorbs variety","Variety should be eliminated"],1,"Se ogni caso insolito va a un solo manager → collo di bottiglia. La capacità di risposta deve stare dove si presenta la varietà."],
 ["","Which statement about subcultures is consistent with the course?",["Subcultures are a sign of a failed culture","Different subcultures, like Sales and Compliance, can have legitimate but conflicting priorities","An organization should have one uniform culture","Subcultures only exist in multinationals"],1,"\"Neither is inherently wrong.\" Il punto è integrarle."],
 ["A manager says: \"Our structure was perfect, so the problem must be the people.\" The market has become far more unpredictable.","Which lens challenges this statement most directly?",["Classical theory","Contingency theory: the structure may no longer fit the environment","Agency theory","Polanyi"],1,"Contingency: una struttura non è \"perfetta\" in assoluto, è adatta o no al contesto. Ambiente imprevedibile → serve più organicità."]
];
