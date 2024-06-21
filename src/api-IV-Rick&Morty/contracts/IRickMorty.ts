export interface AllCharacters {
    info:    Info;
    results: Result[];
}

export interface AllCharactersInfo {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface AllCharactersResults {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface AllCharactersLocation {
    name: string;
    url:  string;
}
