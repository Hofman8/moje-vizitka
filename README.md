# ⚡ Digitální vizitka & Portfolio — Lukáš Hofman

> **Projekt:** Moje digitální vizitka  
> **Předmět:** Moderní technologie | 4. ročník  
> **Škola:** SPŠ, SOŠ a SOU Hradební, Hradec Králové  
> **Obor:** Elektrotechnika  

---

## 📌 O projektu
Tento projekt je moderní osobní digitální vizitka vytvořená za účelem reprezentace na internetu, hledání stáží nebo uplatnění po ukončení studia. Web spojuje mou odbornost v elektrotechnice s disciplínou a týmovým duchem ze sportovního prostředí (lední hokej a florbal).

### 🎯 Splněné požadavky zadání:
1. **Úvodní představení:** Kdo jsem, co studuji, motto vystihující spojení elektrotechniky a sportu.
2. **O mně:** Technická vášeň, sportovní zázemí a přístup k řešení problémů.
3. **Moje dovednosti:** Elektrotechnika, hardware & měření, IT nástroje a měkké dovednosti (soft skills).
4. **Moje projekty:** 
   - *Systém pro půjčování powerbank* (hlavní projekt – správa Li-Ion akumulátorů, BMS ochrana a automatizace).
   - *Monitorovací IoT stanice* (měření prostředí s mikrokontrolérem).
   - *Tato digitální vizitka* (moderní webová prezentace).
5. **Moje budoucnost:** 3kroková časová osa (maturita, praxe/VŠ, inovativní projekty).
6. **Kontakt:** Odkaz na GitHub a bezpečný kontaktní formulář v souladu s ochranou osobních údajů.
7. **Interaktivní prvky:**
   - 🌓 **Přepínač Dark / Light módu** s pamatováním volby v `localStorage`.
   - 🔘 **Interaktivní filtr kategorií dovedností** s plynulým přechodem.
   - 📱 **Plně responzivní mobilní navigace** (hamburger menu).
8. **Bezpečnost & Neindexování:** 
   - Značka `<meta name="robots" content="noindex, nofollow, noarchive">` v hlavičce webu.
   - Žádná hesla, API tokeny ani citlivé osobní údaje.

---

## 🚀 Návod: Jak nahrát web na GitHub a zapnout GitHub Pages

### Krok 1: Inicializace a commit v terminálu
Přejdi do složky projektu a zadej příkazy:
```bash
cd /Users/lukashofman/.gemini/antigravity/scratch/moje-portfolio
git init
git add .
git commit -m "Initial commit: Lukáš Hofman portfolio"
```

### Krok 2: Vytvoření repozitáře na GitHubu
1. Otevři [GitHub](https://github.com) a klikni na **New Repository**.
2. Pojmenuj repozitář např. `moje-portfolio`.
3. Nastav jako **Public** (veřejný).
4. **Neklikej** na "Add README" (již máme v projektu).
5. Zkopíruj příkaz pro propojení (bude vypadat takto):
```bash
git branch -M main
git remote add origin https://github.com/Hofman8/moje-portfolio.git
git push -u origin main
```

### Krok 3: Aktivace GitHub Pages
1. Na GitHubu ve svém repozitáři přejdi do **Settings** -> v levém menu zvol **Pages**.
2. V sekci **Build and deployment** u položky **Branch** vyber `main` a složku `/ (root)`.
3. Klikni na **Save**.
4. Během 1–2 minut bude tvůj web dostupný na adrese:  
   👉 `https://Hofman8.github.io/moje-portfolio/`

---

## 📝 Podklady pro odevzdání do Microsoft Teams

### 1. Odkazy k odevzdání:
* **Web:** `https://Hofman8.github.io/moje-vizitka/`
* **Repozitář:** `https://github.com/Hofman8/moje-vizitka`

### 2. Krátké zhodnocení (připravené ke zkopírování):
> Pro vytvoření webu jsem zvolil čisté HTML5, moderní CSS3 a JavaScript bez externích knihoven, což zajistilo bleskovou rychlost načítání a bezproblémové publikování na GitHub Pages. Jako asistenta při vývoji jsem využíval AI (Gemini), se kterou jsem konzultoval strukturu kódu, logiku ukládání barevného režimu, efekt psacího stroje a responzivní zobrazení na mobilních zařízeních. Nejvíce se mi na výsledném webu líbí moderní dark mode design, dynamický efekt psacího stroje, interaktivní filtrování mých technických i sportovních dovedností a celková přehlednost.

### 3. Potvrzení bezpečnosti:
> „Zkontroloval jsem bezpečnostní požadavky projektu a ověřil, že web ani GitHub repozitář neobsahují žádná hesla, API klíče ani citlivé osobní údaje.“

---

## 🎙️ Tahák k závěrečné 3minutové prezentaci
1. **0:00 – 0:45: Úvod & O mně**
   - Představení: Lukáš Hofman, 4. ročník elektrotechniky na SPŠ Hradební.
   - Vize: propojení technické preciznosti elektrotechniky s disciplínou z ledního hokeje a florbalu.
2. **0:45 – 1:30: Projekt PoweRent**
   - Představení projektu automatizované sdílené stanice powerbank pro studenty a veřejnost (bezpečná správa nabíjení a distribuce energie).
3. **1:30 – 2:15: Funkčnost & Design (Živá ukázka)**
   - Ukázka přepínače **Dark / Light módu** (uložení volby v `localStorage`).
   - Ukázka **efektu psacího stroje** v úvodu a **svítící lišty nahoře** (Scroll Progress Bar).
   - Ukázka **filtrování dovedností** podle kategorií a mobilní zobrazení (hamburger menu).
4. **2:15 – 3:00: Technologie, bezpečnost & AI**
   - Zmínit čistý HTML5, CSS3, JS a nasazení přes GitHub Pages.
   - Ukázat `<meta name="robots" content="noindex...">` v kódu.
   - Zmínit využití AI pro čistou architekturu a skripty.
