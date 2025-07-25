let artwork1 = { name: "Mona Lisa", artist: "Da Vinci", room: "room A1" };
        let artwork2 = { name: "The Scream", artist: "Munch", room: "room B2" };
        let artwork3 = { name: "The Starry Night", artist: "Van Gogh", room: "room C3" };
        let artwork4 = { name: "The Night Watch", artist: "Rembrandt", room: "room D4" };

        let artworks = [artwork1, artwork2, artwork3, artwork4];

        let room11 = { kod: "room A1", display: false }
        let room12 = { kod: "room A2", display: false }
        let room13 = { kod: "room A3", display: false }
        let room14 = { kod: "room A4", display: false }

        let room21 = { kod: "room B1", display: false }
        let room22 = { kod: "room B2", display: false }
        let room23 = { kod: "room B3", display: false }
        let room24 = { kod: "room B4", display: false }

        let room31 = { kod: "room C1", display: false }
        let room32 = { kod: "room C2", display: false }
        let room33 = { kod: "room C3", display: false }
        let room34 = { kod: "room C4", display: false }

        let room41 = { kod: "room D1", display: false }
        let room42 = { kod: "room D2", display: false }
        let room43 = { kod: "room D3", display: false }
        let room44 = { kod: "room D4", display: false }

        let rooms = [[room11, room12, room13, room14],
         [room21, room22, room23,room24],
          [room31, room32, room33, room34],
           [room41, room42, room43, room44]];

        function createMap() {
            console.clear();
            let location = "";
            for (let i = 0; i < rooms.length; i++) {
                for (let j = 0; j < 4; j++) {
                    location += "|" + (rooms[i][j].display ? rooms[i][j].kod : "---") + "|";
                }
                console.log(location);
                console.log("-----------------");
                location = "";
            }
        }

        function findWork(workName) {
            let artwork = artworks.find(b => b.name.toUpperCase().includes(workName.toUpperCase()));
            return artwork ? artwork.room : null;
        }

        function displayOnMap(locationKod) {
            for (let i = 0; i < rooms.length; i++) {
                for (let j = 0; j < 4; j++) {
                    if (rooms[i][j].kod == locationKod) {
                        rooms[i][j].display = true;
                        break;
                    }
                }
            }
        }

        createMap();

        let workName = prompt("Please enter the artwork you want to search:");
        let locationKod = findWork(workName);

        if(locationKod != null){
            displayOnMap(locationKod);
            createMap();
        }
        else{
            alert("this artwork doesn't exist.");
        }