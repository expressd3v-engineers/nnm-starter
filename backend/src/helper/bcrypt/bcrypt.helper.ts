import * as bcrypt from "bcrypt";

const cryptString = (s: string): string => {
    return bcrypt.hashSync(s, bcrypt.genSaltSync(12));
};

const decryptString = (s: string, w: string): boolean => {
    return bcrypt.compareSync(s, w);
};

export { cryptString, decryptString };
