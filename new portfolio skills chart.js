<script>
        const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = Recharts;

        const skillsData = [
            { name}: 'HTML', proficiency: 90 {"}"},
            { name}: 'CSS', proficiency: 85 {"}"},
            { name}: 'JavaScript', proficiency: 75 {"}"},
            { name}: 'Git', proficiency: 65 {"}"}
        ];

        const SkillsChart = () ={">"} (
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                    <XAxis dataKey="name" stroke="#f0f0f0" />
                    <YAxis stroke="#f0f0f0" />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#333',
                            border: '1px solid #666',
                            borderRadius: '4px',
                            color: '#f0f0f0'
                        }}
                    />
                    <Bar 
                        dataKey="proficiency" 
                        fill="#6a11cb"
                        animationDuration={2000}
                        animationBegin={200}
                    />
                </BarChart>
            </ResponsiveContainer>
        );

        ReactDOM.render(
            <SkillsChart />,
            document.getElementById('skills-chart')
        );
    </script>