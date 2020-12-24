import getData from "./lib/service";

import getData from "./lib/service";

async function yazdir(){
    const data = await getData(1);
    console.log(data);
}

yazdir();