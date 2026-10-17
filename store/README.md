# PEPTORA Store

Static GitHub Pages collection: 19 groups / 22 presentations, including DSIP 10 mg, bilingual EN/ES, filters, variant labels, product dialogs, cart and deliberate WhatsApp inquiry checkout. Editorial coastal imagery, Archivo/Inter and original unchanged PEPTORA logo. Generated vial assets are visual packaging representations; actual product photography was not supplied. Every vial displays declared ingredient amounts; KLOW = BPC-157 10 + TB-500 10 + GHK-Cu 50 + KPV 10 = 80 mg. COAs on express request, per owner.

## Single source of retail data

Prices and availability come from `https://raw.githubusercontent.com/peptoramx/Peptora/main/data/store-offers.json`. The feed includes only price and boolean availability, never exact quantities. In-stock products show no stock notice; unavailable ones show under-order shipping terms. The inventory system creates that public projection atomically with lot changes, sales, returns and consignments using `js/transacciones.js`. No cost, provider, commission, customer record or credential is loaded into the storefront. Changes are fetched on page load, window focus and every 60 seconds; CDN propagation may add delay. Direct edits to inventory JSON outside the inventory app require projection regeneration.

Spanish: retail MXN from inventory. English: `round(MXN / 18.2 + 5, 2)` USD per vial, including supplies. Cart totals multiply converted unit prices, not a single US$5 addition per cart. Prices/shipping remain subject to seller confirmation. Missing mappings/prices display pending, never $0. Network failures clear prices/availability rather than showing stale inventory.

Exact matched product/presentation only. Unexpired units sum across lots. Price follows the most recently edited retail price/presentation using the internal store-sync-state.json; stock-only changes do not override that precedence. Acquisition date and row order are legacy fallbacks. All 22 presentations now have prices. Blend identities retain owner-confirmed recipes; the owner reconfirmed CJC/Ipamorelin's single 5 mg inventory field means 5 mg per component (10 mg total). Do not substitute another strength or blend. Ipamorelin was corrected by explicit owner instruction from 100 to 10 mg.

`manage.html` now links to the existing inventory, not a separate offers editor. Change prices/stock in the existing lot editor. Stock already assigned to consignments is not counted a second time. The storefront is not a reservation or payment system: confirm actual sales in the inventory app. Opening WhatsApp does not constitute a sale or decrement stock.

## Checkout

Spanish WhatsApp: +52 662 462 1816 (Sonora). English WhatsApp: +1 731 666 5112 (USA). Name, address, selection, per-unit displayed prices and stock status are included only after customer form submission with consent. Customer reviews/sends the message in WhatsApp; no automatic transmission, payment, stock deduction, or order creation by the site. No name/address saved to browser storage. Cart only stores variant IDs and quantities. Under-order shipping may take 5–7 days after purchase confirmation; seller confirms cost and availability, not a guaranteed delivery date.

Editorial content describes community objectives without claiming guaranteed efficacy or providing administration/dose protocols. Repeated lab/development copy is removed; brief essential compound information is retained where material. Motion respects reduced-motion preferences. Vials use two optimized WebP bases with unique compound color stripes and responsive labels.

Tests: `node store/tests.cjs`. Inventory projection/atomic-commit tests are in the inventory repository. Tests use synthetic customers and do not send messages or register real sales.