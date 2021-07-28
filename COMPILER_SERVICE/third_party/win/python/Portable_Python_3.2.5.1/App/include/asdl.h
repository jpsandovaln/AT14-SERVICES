#ifndef Py_ASDL_H
#define Py_ASDL_H

typedef PyObject * identifier;
typedef PyObject * string;
typedef PyObject * object;

/* It would be nice if the code generated by asdl_c.py was completely
   independent of Python, but it is a goal the requires too much work
   at this stage.  So, for example, I'll represent identifiers as
   interned Python strings.
*/

/* XXX A sequence should be typed so that its use can be typechecked. */

typedef struct {
    int size;
    void *elements[1];
} asdl_seq;

typedef struct {
    int size;
    int elements[1];
} asdl_int_seq;

asdl_seq *asdl_seq_new(int size, PyArena *arena);
asdl_int_seq *asdl_int_seq_new(int size, PyArena *arena);

#define asdl_seq_GET(S, I) (S)->elements[(I)]
#define asdl_seq_LEN(S) ((S) == NULL ? 0 : (S)->size)
#ifdef Py_DEBUG
#define asdl_seq_SET(S, I, V) { \
        int _asdl_i = (I); \
        assert((S) && _asdl_i < (S)->size); \
        (S)->elements[_asdl_i] = (V); \
}
#else
#define asdl_seq_SET(S, I, V) (S)->elements[I] = (V)
#endif

#endif /* !Py_ASDL_H */
