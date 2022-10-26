import React, { useState } from 'react';
import Page from '../../components/Page';
import groupTexts from './groupTexts';
import './Groups.scss';

function Groups() {
  const [group, setGroup] = useState('kids1');
  const t = groupTexts[group];
  return (
    <div className="Groups">
      <Page>
        <div className="container mt-3">
          <h3 className="text-center">Clases</h3>

          <div className="row justify-content-center">
            <select className="w-50" value={group} onChange={(e) => setGroup(e.target.value)}>
              {Object.keys(groupTexts).map((key) => (
                <option value={key}>{groupTexts[key].title}</option>
              ))}
            </select>
          </div>

          <div className="my-3">
            <h5 className="font-weight-bold">{t.title}</h5>
            <p>
              {t.description}
            </p>
            <p>
              {t.additionalText}
            </p>
            {t.goals.length > 0 && (
              <>
                <p className="mb-0">
                  Objetivos de la clase:
                </p>
                <ul>
                  {t.goals.map((goal) => (
                    <li>{goal}</li>
                  ))}
                </ul>
              </>
            )}
            {t.graduationText && (
              <p>
                Sistema de graduación:
                <br />
                {t.graduationText}
              </p>
            )}
            {t.text3}
          </div>

          <hr />
        </div>
      </Page>
    </div>
  );
}

export default Groups;
