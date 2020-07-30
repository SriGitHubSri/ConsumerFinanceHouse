import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ProposalDecisionForm } from '../component/form/proposal-decision-form';
//import * as Navigate from '../constants/routes-constant';

const ProposalDecisionPageContainer = new reduxForm({
    form: 'porposaldecisionform'
})(ProposalDecisionForm);

//ProposalDecisionPageContainer.defaultProps = {};

export const mapStateToProps = state => ({
    proposalSuccess: state.proposal.proposalSuccess,
    proposalFail: state.proposal.proposalFail,
    vehicleDetails: state.financeHouse.vehicleDetails[0],
    proposalStatus: state.proposalStatus,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProposalDecisionPageContainer);