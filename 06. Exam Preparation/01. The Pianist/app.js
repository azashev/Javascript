function solve(input) {
    let pieces = {};
    const n = Number(input.shift());
    for (let index = 0; index < n; index++) {
        const [name, composer, key] = input.shift().split('|');
        pieces[name] = [composer, key];
    }

    for (const line of input) {
        if (line === 'Stop') {
            break;
        }

        const [command, ...elements] = line.split('|');

        const piece = elements[0];
        const pieceExistsInCollection = pieces.hasOwnProperty(piece);
        if (command === 'Add') {
            const composer = elements[1];
            const key = elements[2];
            if (pieceExistsInCollection) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = [composer, key];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (pieceExistsInCollection) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            if (pieceExistsInCollection) {
                const newKey = elements[1];
                pieces[piece][1] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    
    for (const piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece][0]}, Key: ${pieces[piece][1]}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);

console.log();

// solve([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
//   ]);
