const defaultState = [{ company_id: 0, company_name: '', representative_name: '', representative_id: 0}]

const companyAndRepresentative = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_COMPANY_AND_REPRESENTATIVES':
            return action.payload;
        default:
          return state;
      }
}

export default companyAndRepresentative;
