/**
 * Formata um valor numérico para o formato de moeda brasileiro (R$).
 * 
 * @param value - O valor numérico a ser formatado.
 * @returns O valor formatado como string (ex: "R$ 1.234,56").
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
