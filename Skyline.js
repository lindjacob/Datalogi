// Handin 6: Problem B.2 (skyline)
// (a)

let skyline = [1,11,3,13,9,0,12,7,16,3,19,18,22,3,23,13,29];

const addNewBuilding = (l, h, r) => {
    let newSkyline = [];
    let x = [];

    for (let p = 0; p < skyline[0]; p++) {
        x.push(0);
    }

    for (let p = 0; p < skyline.length; p += 2) {
        let height = skyline[p+1];
        let index = skyline[p];
        let nextBuilding = skyline[p+2];
        while (index < nextBuilding) {
            x.push(height);
            index++;
        }
    }
    
    for (let p = l; p <= r; p++) {
        if (x[p] < h) {
            x[p] = h;
        }
    }

    for (let p = 0; p < x.length; p++) {
        if (x[p] != x[p+1]) {
            newSkyline.push(p+1);
            if (x[p+1]) {
                newSkyline.push(x[p+1]);
            }
        }
    }

    console.log(x);
    console.log(newSkyline);
}

addNewBuilding(9,5,17);