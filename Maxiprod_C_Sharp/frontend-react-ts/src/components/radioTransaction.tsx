import React from 'react';

const RadioForm = ({ selectedOption, onOptionChange }: { selectedOption: string, onOptionChange: (value: string) => void }) => {
  return (
    <div className="col-sm-6 col-12">
      <div className="pb-1">
        <span>Tipo de Transação:</span>
      </div>

      <div className="mt-1 pb-1">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="tipo"
            id="receita"
            value="receita"
            checked={selectedOption === 'receita'}
            onChange={() => onOptionChange('receita')}
          />
          <label className="form-check-label" htmlFor="receita">
            Receita
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="tipo"
            id="despesa"
            value="despesa"
            checked={selectedOption === 'despesa'}
            onChange={() => onOptionChange('despesa')}
          />
          <label className="form-check-label" htmlFor="despesa">
            Despesa
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioForm;
