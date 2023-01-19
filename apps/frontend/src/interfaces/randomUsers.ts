
export default interface RandomUsersType {
    results: Result[];
    info:    Info;
}

export interface Info {
    seed:    string;
    results: number;
    page:    number;
    version: string;
}

export interface Result {
    name:    Name;
    email:   string;
    login:   Login;
    dob:     Dob;
    picture: Picture;
}

export interface Dob {
    date: string;
    age:  number;
}

export interface Login {
    uuid:     string;
    username: string;
    password: string;
    salt:     string;
    md5:      string;
    sha1:     string;
    sha256:   string;
}

export interface Name {
    title: string;
    first: string;
    last:  string;
}

export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}
