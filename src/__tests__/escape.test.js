
describe('escape double quote', () => {
    it('escape', ()=> {
        const testData = 'hoge fuga hoge "Fuga" hoge ';
        const escaped = testData.replace(/"/gi, '""');
        expect(escaped).toBe('hoge fuga hoge ""Fuga"" hoge ')       
    })
})