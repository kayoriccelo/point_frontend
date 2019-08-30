export const maskCpf = (value) =>  value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

export const maskCnpj = (value) =>  value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");

export const maskPhone = (value) =>  value.replace(/(\d{3})(\d{4})(\d{4})/g, "($1) $2-$3");