import {MedalTable} from "../domain/MedalTable";
import {MedalProvider} from "../domain/MedalProvider";

export class Paris2024Provider implements MedalProvider {
    top(n: number): MedalTable[] {
        const data: MedalTable[] = [
            {rank: 1, country: "USA", gold: 39, silver: 41, bronze: 33},
            {rank: 2, country: "China", gold: 38, silver: 32, bronze: 18},
            {rank: 3, country: "Japan", gold: 27, silver: 14, bronze: 17},
            {rank: 4, country: "Great Britain", gold: 22, silver: 21, bronze: 22},
            {rank: 5, country: "ROC", gold: 20, silver: 28, bronze: 23},
            // ... more countries
        ];
        return data.slice(0, n);
    }
}