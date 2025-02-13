import { createContext } from 'react';


const Provider = {
    experience: {
        role: undefined,
        employmentDuration: {
            start: {
                year: undefined,
                month: undefined
            },
            end: {
                year: undefined,
                month: undefined
            }
        },
        description: undefined,
        contributions: [
            undefined,
            undefined
        ],
        technologicalTools: [
            undefined,
            undefined
        ],
        technologicalKnowledge: [
            undefined,
            undefined
        ],
        socialEmotionalCompetencies: [
            undefined,
            undefined
        ],
        company: {
            name: undefined,
            location: undefined,
            industry: undefined,
            website: undefined
        }
    }
};

const WorkExperienceContext = createContext(Provider);


function WorkExperienceProvider({ Provider, children }) {

    return (
        <WorkExperienceContext.Provider value={Provider}>
            {children}
        </WorkExperienceContext.Provider>
    );
}

export {
    WorkExperienceContext,
    WorkExperienceProvider
};
