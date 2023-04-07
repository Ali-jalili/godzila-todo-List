
const actionTypes = {
    addMember: "members/addMember",
    updateMember: "members/updateMember",
    removeMember: "members/removeMember"
};


const initialState = {
    members: []
}

const membersReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.addMember:
            const newMember = action.payload;


            return {
                ...state,
                members: [...state.members, newMember]
            };

        case actionTypes.updateMember:
            const { id, updateNewMember } = action.payload;


            return {
                ...state,
                members: state.members.map((member) => {
                    if (member._id === id) {
                        return {
                            ...member,
                            updateNewMember
                        }

                    }

                    return member;
                })
            };

        case actionTypes.removeMember:
            return {
                ..state,
                members: state.members.filter((member) => member._id !== action.payload)
            };



        default:

            return state;

    }
};

export default membersReducer;

export const addMember = (newMember) => ({
    type: actionTypes.addMember,
    payload: newMember,
})

export const updateMember = (id, updateNewMember) => ({
    type: actionTypes.updateMember,
    payload: { id, updateNewMember }
})


export const removeMember = (id) => ({
    type: actionTypes.removeMember,
    payload: id,
})
