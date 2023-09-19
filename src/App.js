import React, { Component } from 'react';

class ProjectForm extends Component {
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
            <div>
                <div className="form-container">
                    <h1>Create New Project</h1>

                    <div className="form-group">
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" id="projectName" placeholder="Enter Project Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select id="category">
                            <option value="Hardware">Hardware</option>
                            <option value="Software">Software</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="projectTitle">Project Title</label>
                        <input type="text" id="projectTitle" placeholder="Enter Project Title" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="Enter Project Description"></textarea>
                    </div>
                </div>

                <div className="form-container">
                    <h1>Project Details</h1>

                    <div className="form-group">
                        <label htmlFor="techStack">Tech Stack</label>
                        <input type="text" id="techStack" placeholder="Enter Tech Stack" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="projectTheme">Project Theme</label>
                        <input type="text" id="projectTheme" placeholder="Enter Project Theme" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="projectLink">Project Link</label>
                        <input type="text" id="projectLink" placeholder="Enter Project Link" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="videoLink">Video Link</label>
                        <input type="text" id="videoLink" placeholder="Enter Video Link" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="photos">Photos (jpg, png, webp)</label>
                        <input type="file" id="photos" accept=".jpg, .png, .webp" multiple />
                    </div>
                </div>

                <div className="form-container">
                    <h1>Team Details</h1>

                    <div className="form-group">
                        <label htmlFor="universityName">Institute Name</label>
                        <input type="text" id="universityName" placeholder="Enter University Name" />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Collaborators</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teamMembers.map((member) => (
                                <tr key={member.id}>
                                    <td>{member.id}</td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={member.name}
                                            onChange={(e) =>
                                                this.handleTeamMemberChange(member.id, 'name', e.target.value)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            value={member.email}
                                            onChange={(e) =>
                                                this.handleTeamMemberChange(member.id, 'email', e.target.value)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Role"
                                            value={member.role}
                                            onChange={(e) =>
                                                this.handleTeamMemberChange(member.id, 'role', e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select className="status-select" id="status">
                            <option value="complete">Complete</option>
                            <option value="processing">Underdevlopment</option>
                            <option value="pending">Underesearch</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectForm;