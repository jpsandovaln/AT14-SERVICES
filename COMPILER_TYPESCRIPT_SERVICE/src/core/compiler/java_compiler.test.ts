import { instance, mock, when } from "ts-mockito";
import { ExecuteWin } from '../execute/execute_win';
import { JavaCompiler } from './java_compiler';


describe('Test java compiler', () => {
    it('execute test', async () => {
        let mockedExecuteWin: ExecuteWin = mock(ExecuteWin);

        when(mockedExecuteWin.run('d:/javac d:/HelloWorld.java && d:/java -cp d:/ HelloWorld')).thenResolve({ stdout: 'hello world123' });

        let execute = instance(mockedExecuteWin);

        const langCompiler = new JavaCompiler(
            execute,
            'd:/HelloWorld.java',
            'd:/'
        );
        
        const result = await langCompiler.compiler();

        expect(result).toEqual({ stdout: 'hello world123'});

    });
});
