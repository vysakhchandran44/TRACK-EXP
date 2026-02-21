/**
 * Preloaded Master Product Database
 * Auto-loads on first app start
 */

const PRELOADED_PRODUCTS = [
  { barcode: "00840149658430", name: "VIAGRA 100MG 4S", rms: "220153086" },
  { barcode: "00840149658447", name: "VIAGRA 50MG TABLETS 4S", rms: "220169892" },
  { barcode: "00300020105557", name: "TELFAST 180MG TABLETS 15S", rms: "220002473" },
  { barcode: "00840164519136", name: "CERAZETTE TABLETS 28S", rms: "220171638" },
  { barcode: "00840164520125", name: "MARVELON TABLETS 21S", rms: "220160424" },
  { barcode: "06285074002448", name: "Yasmin 21s Blister", rms: "220164755" },
  { barcode: "06285074002257", name: "YAZ 28s Blister", rms: "" },
  { barcode: "06285074002196", name: "GYNERA TABLETS 21S", rms: "220164755" },
  { barcode: "06285074002417", name: "DIANE 35 TABLETS 21S", rms: "220169789" },
  { barcode: "06291107439358", name: "Zyrtec 75ml Bottle", rms: "220155756" },
  { barcode: "06285074003421", name: "Claritine 10mg 30s", rms: "220161930" },
  { barcode: "06291107431055", name: "ZENTEL 400mg 1s Blister", rms: "220160600" },
  { barcode: "06291109120469", name: "Panadol Advance 24s", rms: "220236078" },
  { barcode: "06291109120476", name: "Panadol Advance 48s", rms: "220222187" },
  { barcode: "06291109121893", name: "Panadol Extra WITH OPTIZORB 24s", rms: "220229947" },
  { barcode: "06291109121909", name: "Panadol Extra WITH OPTIZORB 48s", rms: "220226309" },
  { barcode: "06291109120209", name: "Panadol Cold & Flu All In one 24s", rms: "220223268" },
  { barcode: "06291109120216", name: "Panadol Cold & Flu Day 24s", rms: "220236252" },
  { barcode: "06291109120100", name: "Panadol Baby & Infant 100ml Bottle", rms: "220219715" },
  { barcode: "03664798031966", name: "Telfast 180mg 30s", rms: "220172600" },
  { barcode: "03664798031997", name: "Telfast 180mg 15s", rms: "220002473" },
  { barcode: "03664798027204", name: "Buscopan 10mg 50s", rms: "220181589" },
  { barcode: "03664798001105", name: "Maalox stomach pain 20s", rms: "220230060" },
  { barcode: "03574661047492", name: "Regaine 5% 60ml HDPE Bottle", rms: "220218218" },
  { barcode: "03574661089751", name: "Imodium INSTANTS 12s", rms: "220153581" },
  { barcode: "03499320010863", name: "FUCIDIN CREAM 15GM", rms: "220226723" },
  { barcode: "03582910076384", name: "CRESTOR 5MG TAB OF 28", rms: "220230950" },
  { barcode: "04015630066599", name: "ENTEROGERMINA 2 BILLION 12 CAPSULES", rms: "220202455" },
  { barcode: "04015630068272", name: "ACCUCHECK GUIDE STRIPS 50S", rms: "220225199" },
  { barcode: "05413868111620", name: "PARIET 20MG TABLETS 14S", rms: "220170973" },
  { barcode: "05415062304280", name: "Ponstan Forte 500mg 20s", rms: "220171263" },
  { barcode: "05415062307595", name: "DIFLUCAN 150mg 1s Blister", rms: "220161531" },
  { barcode: "05415062310724", name: "DIFLUCAN 50MG CAPS 7S", rms: "220161317" },
  { barcode: "07612797486085", name: "Cataflam 50mg 10s Blister", rms: "220162683" },
  { barcode: "07612797507759", name: "TobraDex Eye Ointment 3.5g Tube", rms: "220223627" },
  { barcode: "07612797507827", name: "TobraDex Eye Drop Suspension 5ml", rms: "220228055" },
  { barcode: "07640153081971", name: "DEXILANT 60MG 14 TABS", rms: "220156050" },
  { barcode: "07640153082008", name: "DEXILANT 60MG 28TAB", rms: "220163583" },
  { barcode: "06295120051177", name: "Gaviscon Advance PEPPERMINT", rms: "220171299" },
  { barcode: "06291100083367", name: "MEBO", rms: "220233098" },
  { barcode: "06291100086306", name: "MEBO BURN OINTMENT", rms: "220171571" },
  { barcode: "06291100087457", name: "MEBO SCAR OINTMENT 50G", rms: "220236371" },
  { barcode: "06281086013960", name: "SNAFI 5 MG TAB", rms: "220193182" },
  { barcode: "06281086341780", name: "SNAFI TABLET 20MG 12S", rms: "220169060" },
  { barcode: "05000456034203", name: "NOLVADEX 10MG TABLETS 30S", rms: "220152890" },
  { barcode: "05056227207734", name: "LOCERYL 5 NAIL LACQUER", rms: "220195550" },
  { barcode: "08002660030955", name: "EMLA 5 CREAM 5G", rms: "220152551" },
  { barcode: "08002660033710", name: "Brufen Paediatric Syrup 100mg/5ml 200ml", rms: "220201540" },
  { barcode: "08433042009731", name: "BENZAC AC 25 GEL 60GM", rms: "220226723" },
  { barcode: "15285003470551", name: "LOMEXIN 1000 OVULE 1S", rms: "220152778" },
  { barcode: "04260161040192", name: "HIRUDOID CREAM", rms: "220229364" },
  { barcode: "07613421050054", name: "ECINQ FILM COATED ULIPRISTAL ACETATE", rms: "220171489" },
  { barcode: "08020030000063", name: "SILER SILDENAFIL 100 4FILMS", rms: "220180316" },
  { barcode: "00300020122554", name: "TANDO 20 MG TAB 4S", rms: "220196935" }
];

// Auto-load on startup
(async function loadPreloadedProducts() {
  // Wait for DB to be ready
  const checkDB = setInterval(async () => {
    if (typeof DB !== 'undefined' && App && App.db) {
      clearInterval(checkDB);
      
      try {
        const existing = await DB.getAllMaster();
        
        if (existing.length === 0) {
          console.log('📦 Loading preloaded products...');
          await DB.bulkAddMaster(PRELOADED_PRODUCTS);
          await refreshMasterCount();
          console.log(`✅ Loaded ${PRELOADED_PRODUCTS.length} products`);
        }
      } catch (e) {
        console.log('Could not load preloaded products:', e);
      }
    }
  }, 500);
  
  // Timeout after 10 seconds
  setTimeout(() => clearInterval(checkDB), 10000);
})();
