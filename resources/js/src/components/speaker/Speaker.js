import { Container, Row, Col, Nav } from 'react-bootstrap';

import member1 from '../../assets/members/member_1.jpeg';
import member2 from '../../assets/members/member_2.jpeg';
import member3 from '../../assets/members/member_3.jpeg';
import leader from '../../assets/members/leader.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Speaker.scss';
function eachMember(member) {
    return (
        <figure class="c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right info-member"
            style={{ "--primary-color": "rgba(85,75,185,.9)", '--secondary-color': 'rgba(85,75,185,.9)', ' --image-opacity': '.1' }}>
            <img src={member.avatar} alt="Sample Image" />
            <figcaption className="c4-layout-bottom-left user-position">
                <h3>{member.userName}</h3>
                <span>{member.position}</span>
            </figcaption>
            <figcaption className="c4-layout-top-right social-member">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href={member.linkFace}>
                            <FacebookIcon></FacebookIcon>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={member.linkTwitter}>
                            <InstagramIcon></InstagramIcon>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={member.linkInstar}>
                            <TwitterIcon></TwitterIcon>
                        </Nav.Link>
                    </Nav.Item>

                </Nav>
            </figcaption>
        </figure>
    )
}

function showMember(listMember) {
    return (
        listMember.map((member, index) => {
            return (
                member.position == "Leader" ? (
                    <Col xs="12" key={member.userName + index + member.position} className="text-center mb-3">
                        {eachMember(member)}
                    </Col>
                ) : (
                    <Col key={member.userName + index + member.position} className="mt-2">
                        {eachMember(member)}
                    </Col>
                )
            )
        })
    )

}


function Speaker() {
    var listMember = [
        {
            avatar: leader,
            userName: 'Nguyễn Đức Bình',
            position: 'Leader',
            linkFace: 'https://www.facebook.com/binhcoolx',
            linkTwitter: 'https://www.facebook.com/binhcoolx',
            linkInstar: 'https://www.facebook.com/binhcoolx'
        },
        {
            avatar: member1,
            userName: 'Đoàn Anh Tuấn',
            position: 'Member',
            linkFace: 'https://www.facebook.com/peterkill.tuan',
            linkTwitter: 'https://www.facebook.com/peterkill.tuan',
            linkInstar: 'https://www.facebook.com/peterkill.tuan'
        },
        {
            avatar: member2,
            userName: 'Hoàng Hải Long',
            position: 'Member',
            linkFace: 'https://www.facebook.com/hoanghailong2642k',
            linkTwitter: 'https://www.facebook.com/hoanghailong2642k',
            linkInstar: 'https://www.facebook.com/hoanghailong2642k'
        }, {
            avatar: member3,
            userName: 'Phạm Thị Minh Thư',
            position: 'Member',
            linkFace: 'https://www.facebook.com/minhthu1112k',
            linkTwitter: 'https://www.facebook.com/minhthu1112k',
            linkInstar: 'https://www.facebook.com/minhthu1112k'
        }


    ];
    return (
        <div id="teams-speaker">
            <div className="team-introduction">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="title-items margin-items">
                                <h1 className="text-white"> My Teams </h1>
                                <h3 className="text-white">Welcome to my teams. Introduce the members of the crime group</h3>
                            </div>
                        </Col>

                        <Col xs="12">
                            <div className="list-member margin-items margin-bottom-items">
                                <Row>
                                    {showMember(listMember)}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Speaker;