import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

// Define a fade-in animation
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

// Styled components for your form
const Container = styled.div`
    margin: 20px;
`;

const FormContainer = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 20px;
    animation: ${fadeIn} 0.3s ease-in-out;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

// Add styled components for other form elements (select, textarea, table, etc.)

class StyledProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamMembers: [
                { id: 1, name: '', email: '', role: '' },
                { id: 2, name: '', email: '', role: '' },
            ],
        };
    }

    handleTeamMemberChange = (id, field, value) => {
        this.setState((prevState) => ({
            teamMembers: prevState.teamMembers.map((member) =>
                member.id === id ? { ...member, [field]: value } : member
            ),
        }));
    };

    render() {
        return (
            <Container>
                <CSSTransition in appear timeout={300} classNames="fade">
                    <FormContainer>
                        <h1>Create New Project</h1>

                        <FormGroup>
                            <Label htmlFor="projectName">Project Name</Label>
                            <Input type="text" id="projectName" placeholder="Enter Project Name" />
                        </FormGroup>

                        {/* ... Add other form elements as needed ... */}

                        <table>
                            {/* ... Add table content here ... */}
                        </table>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <select className="status-select" id="status">
                                <option value="complete">Complete</option>
                                <option value="processing">Processing</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                    </FormContainer>
                </CSSTransition>
            </Container>
        );
    }
}

export default StyledProjectForm;
