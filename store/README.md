# PEPTORA Store — preview

Buildless HTML/CSS/JS for GitHub Pages at `/store/`. Uses the existing unchanged PEPTORA logo, Archivo/Inter and the site's white / ice blue / navy tokens. Vials are generated packaging mockups, not actual product photographs. Original logo + a unique color stripe + lowercase geometric bold compound name + a boxed presentation are typeset in HTML to stay sharp; selected presentations update the label. Archivo 900 visually matches the site's geometric style; the original logo remains an unchanged image, not a recreated font logo.

## Catalog configuration

`catalog.js` contains 18 product groups and 21 presentations. Every variant currently has `price: null`, `available: false` and `currency: 'MXN'`. No price or stock is invented. The owner confirmed KLOW at BPC-157 10 mg + TB-500 10 mg + GHK-Cu 50 mg + KPV 10 mg = 80 mg total. The standalone product is CJC-1295 no DAC 5 mg, not CJC-1290. Quantities in mg are declared vial contents, not recommended doses or certificates of analysis. Every product dialog lists ingredients/amounts; single-compound amounts follow the selected presentation, while combination totals are explicit. BAC water is listed in ml; no unprovided preservative or excipient percentages are fabricated.

`community.js` contains original EN/ES plain-language explanations for all 18 products: what attracts biohacking interest and a product-specific limitation. It distinguishes Semax (focus/attention) from Selank (calm/stress), individual BPC-157 from Wolverine, no-DAC from DAC, and NAD+ from its precursors. These are explicitly community interests, not approved indications or guaranteed benefits. Search also includes these short descriptions.

Editorial checks: existing PEPTORA `community-context.js`; [FDA peptide safety context](https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks); [Selank primary clinical study](https://pubmed.ncbi.nlm.nih.gov/18454096/); [FDA elamipretide context](https://www.fda.gov/drugs/drug-trials-snapshots/drug-trials-snapshots-forzinity); [Lilly retatrutide investigational status](https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-successful-two-additional). These sources support specific distinctions and limitations, not every community expectation. A disclaimer does not legalize marketing unapproved products for personal use.

Update product records here after confirming the selected commercial catalog. Do not import administrative inventory JSON, provider records, costs, margins, commission settings or credentials. Prices may later be displayed by changing `price`, but this does not activate checkout or authenticate prices: a secure server must validate any future order.

## Current features

- EN first visit; explicit `?lang=en|es` and existing `peptora_session_lang` session preference are respected. Links back to the main site retain language.
- Segment + text + type filters, accent/punctuation-insensitive search, presentation selectors and product dialogs; shareable `?product=id` / `?segment=id` links.
- Browser-local selection, quantity controls, removal, clear, safe parsing, maximum 99 per presentation and cross-tab updates. Language-independent variant IDs.
- Dialog keyboard/Escape support, focus restoration, live result/selection announcements, responsive layouts and reduced-motion support.

## Deliberately not enabled

Checkout, payment, order capture, customer accounts, inventory reservation, shipping rates and promotion validation. No network write or order is performed. Any unpriced item prevents displaying an invented cart total. Adding a product only saves a selection locally.

Before commercial activation, confirm product eligibility and permitted claims in the target jurisdictions, seller/payment-provider approval, actual stock, product documentation, prices, delivery/return/privacy terms and secure server-side ordering. An educational disclaimer is not regulatory authorization.

## Checks

Run `node store/tests.cjs` from repository root. Tests do not create orders or change inventory.
