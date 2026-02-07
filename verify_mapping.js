
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const targetFile = join(__dirname, 'src', 'data', 'carSeedData.ts');
const fileContent = readFileSync(targetFile, 'utf-8');
const lines = fileContent.split('\n');

const vehicleListRaw = `
1. The Vehicle List
[VW T-Roc 
2. VW Tiguan
3. VW Golf (7 & 8)
4. VW Polo
5. VW Touareg
6. VW Caddy 
7. VW Taigo
8. VW Passat
9. VW Amarok
10. VW ID.4
11. VW Crafter
12. Audi Q3 (Premium leader)
13. Audi Q5
14. Audi A3
15. Audi A4
16. Audi Q2
17. Audi Q8
18. Audi A6
19. Audi e-tron
20. Skoda Octavia
21. Skoda Kodiaq
22. Skoda Fabia
23. Skoda Karoq
24. Skoda Superb
25. Skoda Kamiq
26. Skoda Scala
27. Seat Ibiza
28. Seat Leon
29. Seat Ateca
30. Seat Arona
31. Seat Tarraco
32. Cupra Formentor

1. Hyundai Tucson (Top-tier SUV)
2. Hyundai Accent
3. Hyundai i10
4. Hyundai i20
5. Hyundai Creta
6. Hyundai Santa Fe
7. Hyundai H100 (Essential light truck)
8. Hyundai Elantra
9. Hyundai Kona
10. Hyundai Ioniq 5
11. Kia Sportage
12. Kia Picanto
13. Kia Rio
14. Kia Sorento
15. Kia Niro
16. Kia Stonic
17. Kia K2500
18. Kia Ceed
19. Kia EV6
20. Kia Sonet

1. Toyota Hilux
2. Toyota Yaris
3. Toyota Yaris Cross (Hybrid leader)
4. Toyota Corolla
5. Toyota Corolla Cross
6. Toyota RAV4
7. Toyota Land Cruiser (Prado & 300)
8. Toyota C-HR
9. Toyota Proace
10. Suzuki Swift
11. Suzuki Vitara
12. Suzuki Jimny
13. Suzuki Celerio
14. Suzuki Dzire
15. Nissan Qashqai (e-Power)
16. Nissan Juke
17. Nissan Navara
18. Nissan X-Trail
19. Nissan Micra
20. Honda CR-V
21. Honda HR-V
22. Honda Civic
23. Mazda 3
24. Mazda CX-5
25. Mazda CX-30
26. Mitsubishi L200
6. The Rising Chinese Wave
Chinese cars grew by 180%+ in Morocco recently.
121. BYD Atto 3
122. BYD Dolphin
123. BYD Seal
124. BYD Han
125. MG 3 (Hybrid)
126. MG ZS
127. MG HS
128. MG 4
129. Chery Tiggo 2 Pro
130. Chery Tiggo 7 Pro
131. Chery Tiggo 8 Pro
132. Omoda 5
133. Jaecoo 7
134. Geely Coolray
135. Geely Azkarra
136. Haval Jolion
137. Haval H6
138. DFSK Glory 500
139. DFSK Seres 3
140. Jetour X70
141. Exeed RX
142. Baic X35
143. Changan CS35

1. Mercedes-Benz Classe E
2. Mercedes-Benz Classe C
3. Mercedes-Benz Classe A
4. Mercedes-Benz GLC
5. Mercedes-Benz GLA
6. Mercedes-Benz GLE
7. Mercedes-Benz Sprinter (Large taxi/van)
8. Mercedes-Benz Classe S
9. BMW Série 5
10. BMW Série 3
11. BMW X1
12. BMW X3
13. BMW X5
14. BMW Série 1
15. BMW iX
16. Range Rover Sport
17. Range Rover Evoque
18. Range Rover Defender
19. Range Rover Velar
20. Jaguar F-Pace
21. Porsche Cayenne
22. Porsche Macan
23. Porsche 911
24. Volvo XC60
25. Volvo XC90
26. Lexus UX
`;


const urlListRaw = `
https://tse2.mm.bing.net/th/id/OIP.RUuauIqML8PgzNA_EQsnnAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.vmXKqOXJij9JvRuHR5ANYQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.e9ea6a605fd058f7b19004b16b8a3472?rik=5AOPNaskTrlrCg&riu=http%3a%2f%2fwww.sembang-auto.com%2fwp-content%2fuploads%2f2012%2f09%2fVW-Golf-1.jpg&ehk=BrIX8fXAcvr4IjYYB64xACS%2fNdD5pXOspewkt%2fLup0I%3d&risl=&pid=ImgRaw&r=0
https://cdn.motor1.com/images/mgl/oR3G4/s1/volkswagen-polo-2021.jpg
https://tse1.mm.bing.net/th/id/OIP._om96gEiGveYvFhavL-6rwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://carwow-uk-wp-3.imgix.net/THE-NEW-VOLKSWAGEN-CADDY-WORLD-PREMIERE-OF-THE-FOURTH-GENERATION-BEST-....jpg
https://th.bing.com/th/id/R.5ee5004a44ceb9053693427a29aed579?rik=12JOF3ZmTh3gcA&riu=http%3a%2f%2fwww.autotrade.ie%2fwp-content%2fuploads%2f2021%2f07%2funnamed-19-scaled.jpg&ehk=pyjypEZqc%2fenqO%2b0SbKkZOwsgJWptAQEMgOdluzqnhQ%3d&risl=&pid=ImgRaw&r=0
https://th.bing.com/th/id/OIP.scsOtq0Qrai5jgSsVMSJlgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3
https://cdn.motor1.com/images/mgl/Yy2ye/s1/volkswagen-amarok-by-abit.jpg
https://uploads.vw-mms.de/system/production/images/vwn/074/687/images/88d94bf562b7fa86c054ae480249e93b69235964/DB2022AU00705_web_1600.jpg?1661959594
https://th.bing.com/th/id/R.df2d5ad7a1c54fec9e873d2d04012d1a?rik=yUf5bn65g0Wu3A&pid=ImgRaw&r=0
https://platform.cstatic-images.com/in/v2/stock_photos/011dc425-ac44-4185-9ca8-9f7813fecbfc/06db75fa-de5c-4526-854f-1dc6da7c0450.png
https://tse1.mm.bing.net/th/id/OIP.UR7tTtGoisyCyAvvrM427QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.mB-ltek4rVi1LR0-2Cao4wHaE7?rs=1&pid=ImgDetMain&o=7&rm=3
https://www.motortrend.com/uploads/2023/08/2-2024-Audi-A4-front-view.jpg
https://th.bing.com/th/id/R.fa5b81b110d3153064461bbb7d8df502?rik=QqKrUafPqcPb3g&pid=ImgRaw&r=0
https://www.carscoops.com/wp-content/uploads/2018/10/3adcf6e2-audi-q8-50-tdi-quattro-by-abt-0.jpg
https://cdn.motor1.com/images/mgl/KxXnN/s1/2019-audi-a6.jpg
https://th.bing.com/th/id/R.7c4de6a5b84d42163eea3e0e0c4d7f77?rik=FiZITDosomjk%2fA&pid=ImgRaw&r=0
https://ev-database.org/img/auto/Audi_e-tron/Audi_e-tron-01@2x.jpg
https://cdn.motor1.com/images/mgl/6ZNmGX/s1/skoda-octavia-2024.jpg
https://assets.adac.de/image/upload/v1/Autodatenbank/Fahrzeugbilder/im06339-1-skoda-kodiaq.jpg
https://tse1.mm.bing.net/th/id/OIP.xtPV8dsIHrzkQHwJMzV3ZAHaEL?rs=1&pid=ImgDetMain&o=7&rm=3
https://cdn.motor1.com/images/mgl/8AnpX3/s1/2022-skoda-karoq-style.jpg
https://tse1.mm.bing.net/th/id/OIP.UIiOF7hkEFzcjWQFDDcPMgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3
https://cdn.skoda-storyboard.com/2023/07/header_Kamiq_7917a803.webp
https://images.prismic.io/carwow/723b1d0c-0ddf-4790-a784-704014a72fe9_RHD+Skoda+Scala+Exterior+1.jpg
https://www.seat.com/content/dam/public/seat-website/carworlds/new-cw-ibiza/overview/version-view/ibiza-reference/seat-ibiza-reference-colour-candy-white.png
https://www.seat.de/content/dam/public/seat-website/myco/2425/carworlds/leon/fr/header-version/seat-leon-5d-fr-trim-desire-red-colour-alloy-wheels.png
https://tse4.mm.bing.net/th/id/OIP.YufAOLH_InM1cLm0PKyppQHaDy?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.6er6JFhygnEDpWltT1w_DwHaDq?rs=1&pid=ImgDetMain&o=7&rm=3
https://cdn.motor1.com/images/mgl/YK24y/s1/2019-cupra-formentor-concept.jpg
444444444444444444444444444
https://th.bing.com/th/id/R.d03792212bc3028f2678fbc01bbdfeda?rik=166rEZAd9gftdg&pid=ImgRaw&r=0
https://tse1.mm.bing.net/th/id/OIP.XuxPoiqK2ZjnygpisaBn5QHaE4?rs=1&pid=ImgDetMain&o=7&rm=3
https://media.whatcar.com/wc-image/2023-09/hyundai-i10-front-right-static.jpg
https://image-prod.iol.co.za/16x9/800/Hyundai-i20-N-Line-Picture-Supplied?source=https://iol-prod.appspot.com/image/cf2e82aa2264f2212b198d1bcdb172ba49d25f8a/2000&operation=CROP&offset=0x1&resize=2000x1125
https://tse4.mm.bing.net/th/id/OIP.5ttFnIvP69IGav7iPQsczwHaE_?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse3.mm.bing.net/th/id/OIP.Ta-5t2BPHjgMvpL_cdjBHQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://www.hyundai.com/content/dam/hyundai/template_en/en/images/find-a-car/pip/h-100-2020/exterior/h-100-pe2-design-left-front-view-white-pc.jpg
https://tse1.mm.bing.net/th/id/OIP.C1iU6tgAGeWlfLBtpEnh4gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.P3L8ia5YS6QjmA67swd7rgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse3.mm.bing.net/th/id/OIP.kzvQyGv6m5Natn64WtBSCgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/sportage/my26/discover/kia-sportage-hev-gtl-my26-1920x1080.png
https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/ae310208-5a3c-4fd1-ad44-dea92d9a380b/Kia_Picanto_FL_6.jpg
https://tse2.mm.bing.net/th/id/OIP.iDWf3XRKZLb7Jbzue70TsgHaEc?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.2K1eMCl5vfDqcKs5nvVGRwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.t8jNbF-KIODpsxZfBytftAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.oQ7j_21lXBHQQ-cuMGrkRwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.74deef966df9584af1ff7e2eb2de067b?rik=Eqbi4XV%2fivAo6Q&riu=http%3a%2f%2fgomotors.net%2fpics%2fKia%2fkia-k2500-01.jpg&ehk=rz%2f0keKWjvSYmp9eWT65mOTz2KCzMqa3cLKM3iPbq4k%3d&risl=&pid=ImgRaw&r=0
https://tse2.mm.bing.net/th/id/OIP.jzqTp61I7fxKOyIax0ONPgHaEv?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.ZP088Rw-tTmthSmYc9jkZQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.fSyMzVgseB0romsePgTm4QHaEj?rs=1&pid=ImgDetMain&o=7&rm=3
https://kong-proxy-aws.toyota-europe.com/c1-images/resize/ccis/1280x1280/zip/gb/configurationtype/visual-for-grade-selector/product-token/b4b18d46-7f55-494a-a10a-da4beff7d42b/grade/ba7bd29c-20fc-4230-896f-b415d7f30f53/body/f880e881-f794-4aef-9e12-db540db6d76d/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4_4R8.png
https://th.bing.com/th/id/R.f0daa377e2f83f8b64197b96a164f079?rik=9SPxX3DnIblz8Q&pid=ImgRaw&r=0
https://tse2.mm.bing.net/th/id/OIP.l9VCJ88L4nRHva9tk8oRnQHaEX?rs=1&pid=ImgDetMain&o=7&rm=3
https://cdn.motor1.com/images/mgl/bgmN9m/s1/2024-toyota-gr-corolla-circuit-edition-blue-flame.jpg
https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/09/2024-toyota-corolla-cross-hybrid-xse-acidic-blast.jpg
https://kong-proxy-aws.toyota-europe.com/c1-images/resize/ccis/1280x1280/zip/gb/configurationtype/visual-for-grade-selector/product-token/fefefc65-91ff-48d2-870c-8bc60befcd2f/grade/051a2705-0530-4d39-9aa3-cd2a73ce13f5/body/30b0ef55-504f-4ce5-8f54-6856b2e8aa20/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4.png
https://kong-proxy-aws.toyota-europe.com/c1-images/resize/ccis/1280x1280/zip/ie/configurationtype/visual-for-grade-selector/product-token/7d82310a-07ce-4807-a167-3056c99e7a50/grade/32a982e2-7d17-4cdf-9e34-48f5d3e25520/body/b718c321-78ab-417d-af59-ccedefd02910/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4.png
https://kong-proxy-aws.toyota-europe.com/c1-images/resize/ccis/1280x1280/zip/gb/configurationtype/visual-for-grade-selector/product-token/cdf10c99-f600-4c62-bc16-b60fdaf31852/grade/345f7940-0acd-4773-a403-65b99addc94d/body/30b0ef55-504f-4ce5-8f54-6856b2e8aa20/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4.png
https://cdn.motor1.com/images/mgl/kPA1e/s1/toyota-proace-city.jpg
https://tse1.mm.bing.net/th/id/OIP.iU35e9_5IQH-RADhSfU1wAHaGI?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.00jIsMO_xPHCk1hmwixh0QHaFD?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.a1ab9af0f8a49e52b3af5b64f3cc4193?rik=5ctJBLev5vHYxw&pid=ImgRaw&r=0
https://tse2.mm.bing.net/th/id/OIP.lQzlwQRwJXU5BFZNaAEv0wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://expatautocm.com/wp-content/uploads/2023/05/Suzuki-Celerio-VHT617.jpg
https://tse3.mm.bing.net/th/id/OIP.t2vEAwrVpow0MujR9uNSWQHaE6?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.WxLVyNIsb1IIbZUj2E2NTgHaEo?w=1200&h=750&rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.xjmu68PrpBXSanogSPcJpwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.HTJiX9NYxnvxvzmf5q9K0QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.bYjc_ajRt-D-YHXsP2DLKgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.HcrixvKQ60omnXbsEcIviQHaEc?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse3.mm.bing.net/th/id/OIP.Cd4BNI2J4XDaod_WgYZ9SgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.ERtSS_hgR1-M2iyt-axjVgHaED?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.ksH6h4rEx7LJ9jM7vcaVJAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://www.motortrend.com/uploads/2022/11/2023-Mazda-Mazda3-Sedan-AWD-Turbo-exterior-29.jpeg
https://tse4.mm.bing.net/th/id/OIP.gAdStY97IspucywZUS7i7gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.1_BY550UhFdeGP_GQZVhyQEsDI?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.ec6250824079c3ce1b9d9fe43553f404?rik=NkBQoUy%2frON%2bww&pid=ImgRaw&r=0
https://parkers-images.bauersecure.com/pagefiles/267101/l200-towing-2018-01.jpg
https://tse4.mm.bing.net/th/id/OIP._Y3oV2ODgguIS0gTWAsIZQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.29yIcBnU2DHUoPfyptnnIwHaEe?rs=1&pid=ImgDetMain&o=7&rm=3
https://www.byd.com/content/dam/byd-site/eu/product/seal/pc/section03.jpg
https://tse1.mm.bing.net/th/id/OIP.2qYVfpebgIhfM0Ic3bFSoAHaET?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.bKA_Rz3l1BHQRFlZe6SxVQHaEh?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.ZJuqRcVM45xezaDVxNJ_agHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.Uahe2QfJfEU9_M6QmWO-bgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.D7mmJUu9Vz3dh7IgiGD-7QHaDe?rs=1&pid=ImgDetMain&o=7&rm=3
https://dhteemohy7ejo.cloudfront.net/web/modelos/tiggo-2-pro/77931-tiggo2pro-negro.png
https://www.log.com.tr/wp-content/uploads/2022/12/chery-tiggo-7-pro.jpg
https://tse2.mm.bing.net/th/id/OIP.ZjWFs0y_zjkr32Zla_0DMQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://images.prismic.io/carwow/ZtBeX0aF0TcGJgts_omoda-5-2024-rhd-front34static.jpg
https://web21st.imgix.net/assets/images/new-vehicles/jaecoo/jaecoo-7-2024.png
https://tse2.mm.bing.net/th/id/OIP.sF5qpRtPQzp0Vl7VEEjZ4wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse4.mm.bing.net/th/id/OIP.myJJZWidDe1hJsl9XXJDjAHaEv?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.s4LeXkLJqUgvui8LZJUoYwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3
https://galerie.automobile.tn/max/2021/11/mercedes-benz-classe-c-180-eq-boost-9g-tronic-amg-exterieur-60811.jpg
https://tse2.mm.bing.net/th/id/OIP.4W4X_1nlDbzcoiCcs24S6wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.15f284e335750e87d1de35227288f406?rik=sIm6X%2fwcjLr41w&pid=ImgRaw&r=0
https://tse3.mm.bing.net/th/id/OIP.uiH3exX3iZ_GEwu89xOQnwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.kVFRYHtc62EZ1GWMciXBmgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.31-u-DNxXiJxI3OSmGuUYwHaE6?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/OIP.FZL4yceXITw8pBmGkSgDDAHaEo?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.597898e7946a8dc95a4595557bdb1205?rik=UV4UFEVCY2IRHA&pid=ImgRaw&r=0
https://tse2.mm.bing.net/th/id/OIP.LoqpTJL0W_rJRtVwVNK5TAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.ywOpj3sAjPYgId29t0ScnAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.abc138f0c2921370aee079a6e24cdbdd?rik=PxxItSCvehSNvw&pid=ImgRaw&r=0
https://cdn.bmwblog.com/wp-content/uploads/2023/02/2024-bmw-x5-facelift-00.jpg
https://th.bing.com/th/id/R.beacb52fa4a9ccc58cb4d611cf078204?rik=srCd39lJqknCOA&pid=ImgRaw&r=0
https://tse2.mm.bing.net/th/id/OIP.UD8QHL1ZrXHm6I9QK8vkjAHaEm?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.4533c4b22e751bea1bf4469f0f842445?rik=VRYCLpdDuG1S9Q&pid=ImgRaw&r=0
https://th.bing.com/th/id/R.c60e2ec88bd3ed22521f254c5fceecc4?rik=1FF5E5OvXw1nZg&pid=ImgRaw&r=0
https://tse4.mm.bing.net/th/id/OIP.Fxgxe92iCr9WQ-dC0qnGHQHaD3?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse2.mm.bing.net/th/id/OIP.ROELoj9JxlNLBUa3rBSl1AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.5653a0b13aa3535c7ec0bc90122a43bd?rik=v2LEFgGcnU3O%2bA&pid=ImgRaw&r=0
https://cdn.motor1.com/images/mgl/bgm3W6/s1/2024-porsche-cayenne-turbo-e-hybrid-front-3-4.jpg
https://tse2.mm.bing.net/th/id/OIP.5nN-vQ0fX4Aj_ygdR59EggHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse3.mm.bing.net/th/id/OIP.V3nD0p-Bhf-TivgmJaYR0wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://tse1.mm.bing.net/th/id/OIP.sdy-nRsjvH1PvWkVsGqldgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
https://th.bing.com/th/id/R.0d8eb0835b72eb0280fd897a617765c7?rik=BWFKhi%2bD3YT%2bFg&pid=ImgRaw&r=0
https://tse1.mm.bing.net/th/id/OIP.VsY6cCWu24ZgRxUX9aMwXgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3
`;

// Helper to clean lines
const cleanLines = (text) => text.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);

// Filter logic:
// 1. Exclude lines starting with "1. The Vehicle List" or "6. The Rising Chinese Wave" or "Chinese cars..."
// 2. Include lines starting with number OR "["
const vehicles = cleanLines(vehicleListRaw).filter(l => {
    if (l.includes("The Vehicle List")) return false;
    if (l.includes("The Rising Chinese Wave")) return false;
    if (l.includes("Chinese cars grew")) return false;
    return /^\d+\./.test(l) || l.startsWith('[');
});

// Filter out separator lines like '4444...' by checking for 'http'
const urls = cleanLines(urlListRaw).filter(l => l.startsWith('http'));

console.log(`Vehicles count: ${vehicles.length}`);
console.log(`URLs count: ${urls.length}`);

// Mapping logic
const replacements = [];
const mappingLog = [];

// Dump anchors
console.log('--- Anchors ---');
if (vehicles.length > 0) console.log(`V[0]: ${vehicles[0]} -> U[0]: ${urls[0]?.substring(0, 30)}`);
if (vehicles.length > 32) console.log(`V[32]: ${vehicles[32]} -> U[32]: ${urls[32]?.substring(0, 30)}`);
if (vehicles.length > 120) console.log(`V[120]: ${vehicles[120]} -> U[120]: ${urls[120]?.substring(0, 30)}`);
console.log('---------------');

for (let i = 0; i < vehicles.length; i++) {
    const vStr = vehicles[i];
    const url = urls[i];

    if (!url) {
        // If we ran out of URLs, just stop (or log)
        // console.warn(`No URL for vehicle at index ${i}: ${vStr}`);
        continue;
    }

    // Clean name logic
    let cleanName = vStr;
    // Remove leading "[" if present
    cleanName = cleanName.replace(/^\[/, '');
    // Remove "1. " or "121. "
    cleanName = cleanName.replace(/^\d+\.\s*/, '');
    // Remove "(...)"
    cleanName = cleanName.replace(/\s*\(.*\)/, '').trim();

    // Remove any trailing "]" if present? (Prompt said "[VW T-Roc" only, no closing bracket shown, but good to be safe)

    // Map user brand to code brand
    let brand = cleanName.split(' ')[0];
    let model = cleanName.substring(brand.length).trim();

    if (brand === 'VW') brand = 'Volkswagen';

    // Handle special cases
    if (vStr.includes('Range Rover')) {
        brand = 'Land Rover';
        model = cleanName;
    }

    // Attempt to find in file
    const matchLineIndex = lines.findIndex(line => {
        if (!line.includes(`brand: '${brand}'`)) return false;

        // Relaxed model check:
        // Does the line contain the model name inside quotes?
        // match 'ModelName' or "ModelName" or just ModelName if valid
        // We know the line format is usually model: 'Name'
        // So checking if line includes the model string is usually safe given Brand context
        return line.includes(model);
    });

    if (matchLineIndex !== -1) {
        const lineContent = lines[matchLineIndex];
        const newLine = lineContent.replace(/imageUrl: '.*'/, `imageUrl: '${url}'`);

        replacements.push({
            StartLine: matchLineIndex + 1,
            EndLine: matchLineIndex + 1,
            TargetContent: lineContent.trim(),
            ReplacementContent: newLine.trim()
        });

        // Log only if needed
        // mappingLog.push(`MATCH: "${cleanName}" -> Line ${matchLineIndex + 1}: ${url.substring(0, 30)}...`);
    } else {
        // mappingLog.push(`NO MATCH: "${cleanName}" (Brand: ${brand}, Model: ${model})`);
    }
}


// Write replacements to file
import { writeFileSync } from 'fs';
writeFileSync(join(__dirname, 'replacements.json'), JSON.stringify(replacements, null, 2));
console.log(`Wrote ${replacements.length} replacements to replacements.json`);

