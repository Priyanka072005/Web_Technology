fetch("Data/members.json")
  .then(response => response.json())
  .then(members => {
    const list = document.getElementById("team-list");

    for (let i = 0; i < members.length; i += 2) {
      const row = document.createElement("div");
      row.classList.add("team-row");

      const member1 = members[i];
      row.appendChild(createMemberBlock(member1));

      if (members[i + 1]) {
        const member2 = members[i + 1];
        row.appendChild(createMemberBlock(member2));
      }

      list.appendChild(row);
    }
  })
  .catch(error => console.error("Error loading members:", error));

function createMemberBlock(member) {
  const div = document.createElement("div");
  div.classList.add("member-info");

  const skillsText = Array.isArray(member.skills)
    ? member.skills.join(", ")
    : "Not specified";

  div.innerHTML = `
    <h3>${member.name}</h3>
    <p><strong>Role:</strong> ${member.role}</p>
    <p><strong>Department:</strong> ${member.department}</p>
    <p><strong>Year:</strong> ${member.year}</p>
    <p><strong>Skills:</strong> ${skillsText}</p>
    <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
  `;
  return div;
}
